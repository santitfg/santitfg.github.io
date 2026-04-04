import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

const isImageUrl = (value) => {
  if (!value) return false;
  return /\.(avif|bmp|gif|jpe?g|png|svg|tiff?|webp)(\?.*)?(#.*)?$/i.test(value);
};

const ImageModal = () => {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const elRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // create a container for the portal on mount
    elRef.current = document.createElement("div");
    document.body && document.body.appendChild(elRef.current);
    setMounted(true);

    return () => {
      // remove the container safely on unmount
      if (elRef.current && elRef.current.parentNode) {
        elRef.current.parentNode.removeChild(elRef.current);
      }
      elRef.current = null;
    };
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      const target = e.target;

      // Only respond when the click is on an actual <img> element (or inside it).
      const img = target && target.closest ? target.closest("img") : null;
      if (!img) return;

      // Only handle images rendered inside markdown/html post content.
      const isContentImage = !!img.closest(".unreset");
      if (!isContentImage) return;

      // If the image is wrapped in a link:
      // - keep normal navigation for non-image links
      // - open modal only for image links
      const parentLink = img.closest("a");
      if (parentLink) {
        const href = parentLink.getAttribute("href") || "";
        if (!isImageUrl(href)) return;
      }

      const imageSrc = parentLink ? parentLink.href : img.currentSrc || img.src;
      if (!imageSrc) return; // defensive: avoid opening modal with empty source

      if (parentLink) e.preventDefault();

      const imageAlt = img.alt || img.getAttribute("title") || "";

      setSrc(imageSrc);
      setAlt(imageAlt);
      setOpen(true);
    };

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = open ? "hidden" : "";
    }
  }, [open]);

  if (!mounted || !elRef.current) return null;

  return createPortal(
    open ? (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
        onClick={() => setOpen(false)}
        aria-modal="true"
        role="dialog"
      >
        <div className="relative max-w-[95%] max-h-[95%]">
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[80vh] object-contain rounded-md shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setOpen(false)}
            className="absolute -top-3 -right-3 bg-white text-gray-800 rounded-full p-2 shadow"
            aria-label="Cerrar imagen"
          >
            ✕
          </button>
        </div>
      </div>
    ) : null,
    elRef.current
  );
};

export default ImageModal;
