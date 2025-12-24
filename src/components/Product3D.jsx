import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ComingSoonBadge from "./ComingSoonBadge";

const PUBLIC_FRONT = "/images/mkh-front.jpg";
const PUBLIC_BACK = "/images/mkh-back.jpg";

const UPLOADED_FRONT =
  "/mnt/data/WhatsApp Image 2025-11-23 at 13.31.11_db66361c.jpg";
const UPLOADED_BACK =
  "/mnt/data/WhatsApp Image 2025-11-23 at 13.30.49_21d34dbd.jpg";

export default function Product3D() {
  const ref = useRef(null);
  const [front, setFront] = useState(PUBLIC_FRONT);
  const [back, setBack] = useState(PUBLIC_BACK);
  const [flipped, setFlipped] = useState(false);

  const rY = useMotionValue(0);
  const rX = useMotionValue(0);
  const scale = useTransform(rY, [-60, 60], [1.04, 1.04]);

  useEffect(() => {
    const check = async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        return res.ok;
      } catch {
        return false;
      }
    };

    (async () => {
      const f = await check(PUBLIC_FRONT);
      const b = await check(PUBLIC_BACK);
      if (!f) setFront(UPLOADED_FRONT);
      if (!b) setBack(UPLOADED_BACK);
    })();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const sc = window.scrollY;
      const max = 1200;
      const t = Math.max(0, Math.min(sc / max, 1));
      rX.set(t * 50 - 25);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [rX]);

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = (y / rect.height - 0.5) * -14;
    const ry = (x / rect.width - 0.5) * 28;

    rX.set(rx);
    rY.set(ry);
  };

  const leave = () => {
    rX.set(0);
    rY.set(0);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-darkgreen flex items-center gap-3">
            Authentic Makhana — Farmage (Unit of Paavitram Food Pvt Ltd)
            <ComingSoonBadge />
          </h1>

          <p className="mt-3 text-brown">
            Hand-processed in Madhubani, finished in Mumbai. Organic, flavoured
            and premium.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              className="btn-disabled px-3 py-2 rounded-md text-sm"
              disabled
            >
              Shop Now
            </button>

            <button
              className="btn-disabled px-3 py-2 rounded-md text-sm"
              disabled
            >
              Explore Flavours
            </button>

            <button
              onClick={() => setFlipped((s) => !s)}
              className="border px-3 py-2 rounded-md text-sm"
            >
              Flip
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={leave}
            style={{ perspective: 1400 }}
          >
            <motion.div
              style={{ rotateX: rX, rotateY: rY, scale }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="w-56 h-64 md:w-80 md:h-96 rounded-2xl shadow-xl bg-white overflow-hidden relative"
            >
              {/* FRONT IMAGE */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  transition: "transform 0.6s",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={front}
                  alt="front"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (e.target.src !== UPLOADED_FRONT) {
                      e.target.src = UPLOADED_FRONT;
                    }
                  }}
                />
              </div>

              {/* BACK IMAGE */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: flipped ? "rotateY(0deg)" : "rotateY(-180deg)",
                  transition: "transform 0.6s",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={back}
                  alt="back"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (e.target.src !== UPLOADED_BACK) {
                      e.target.src = UPLOADED_BACK;
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-brown flex flex-col sm:flex-row gap-3">
        <div>
          <strong>Origin:</strong> Madhubani, Bihar
        </div>
        <div>
          <strong>Processed:</strong> Mumbai Plant
        </div>
      </div>
    </div>
  );
}
