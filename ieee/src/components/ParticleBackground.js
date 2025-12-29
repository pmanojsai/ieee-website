import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      canvas.width = Math.floor(window.innerWidth * DPR);
      canvas.height = Math.floor(window.innerHeight * DPR);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D Starfield parameters
    const fov = 400; // camera field of view
    const speedBase = 0.8;
    const starCount = Math.min(800, Math.floor((window.innerWidth * window.innerHeight) / 2500));

    const stars = [];
    const resetStar = (star) => {
      star.x = (Math.random() - 0.5) * 2000;
      star.y = (Math.random() - 0.5) * 2000;
      star.z = Math.random() * 2000 + 200;
      star.px = 0;
      star.py = 0;
      star.opacity = Math.random() * 0.8 + 0.2;
    };

    for (let i = 0; i < starCount; i++) {
      const s = { x: 0, y: 0, z: 0, px: 0, py: 0, opacity: 1 };
      resetStar(s);
      stars.push(s);
    }

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRX = 0;
    let targetRY = 0;
    const onMouseMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX = (e.clientX - cx) / cx;
      mouseY = (e.clientY - cy) / cy;
    };
    window.addEventListener('mousemove', onMouseMove);

    const drawGlow = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width / (2 * DPR),
        canvas.height / (2 * DPR),
        0,
        canvas.width / (2 * DPR),
        canvas.height / (2 * DPR),
        Math.max(canvas.width, canvas.height) / DPR
      );
      gradient.addColorStop(0, 'rgba(30, 58, 138, 0.35)'); // blue-900
      gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.15)'); // blue-500
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0.05)'); // indigo-500
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGlow();

      // Smooth camera tilt toward mouse
      targetRX += ((mouseY * 0.25) - targetRX) * 0.02;
      targetRY += ((mouseX * -0.25) - targetRY) * 0.02;

      const centerX = canvas.width / (2 * DPR);
      const centerY = canvas.height / (2 * DPR);

      // Add slight motion blur trails
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move forward
        const speed = speedBase + (i % 5) * 0.05;
        star.z -= speed;
        if (star.z <= 1) resetStar(star);

        // Apply mouse tilt (rotate in X/Y)
        const rx = targetRX;
        const ry = targetRY;
        const cosRX = Math.cos(rx);
        const sinRX = Math.sin(rx);
        const cosRY = Math.cos(ry);
        const sinRY = Math.sin(ry);

        const dx = star.x * cosRY - star.z * sinRY;
        const dz = star.x * sinRY + star.z * cosRY;
        const dy = star.y * cosRX - dz * sinRX;
        const dz2 = star.y * sinRX + dz * cosRX;

        // Perspective projection
        const scale = fov / (fov + dz2);
        const x2d = dx * scale + centerX;
        const y2d = dy * scale + centerY;

        // Draw star
        const size = Math.max(0.5, 2.5 * (1 - dz2 / 2200));
        const hue = 210 + (i % 60); // blue to indigo hues
        ctx.fillStyle = `hsla(${hue}, 90%, 60%, ${0.8 * star.opacity})`;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fill();

        // Trail line from previous to current position
        if (star.px && star.py) {
          ctx.strokeStyle = `hsla(${hue}, 90%, 70%, ${0.25 * star.opacity})`;
          ctx.lineWidth = size * 0.6;
          ctx.beginPath();
          ctx.moveTo(star.px, star.py);
          ctx.lineTo(x2d, y2d);
          ctx.stroke();
        }

        star.px = x2d;
        star.py = y2d;
      }

      ctx.globalCompositeOperation = 'source-over';
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground; 