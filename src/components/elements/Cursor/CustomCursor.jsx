import { useEffect } from "react";
import { bubbleCursor, followingDotCursor } from "cursor-effects"; // Import beberapa efek

const CustomCursor = () => {
  useEffect(() => {
    const initializeCursorEffects = () => {
      if (window.innerWidth > 768) {
        // Hanya jalankan efek jika lebar layar lebih dari 768px (bukan mobile)
        new followingDotCursor({
          diameter: 20, // Diameter untuk dot yang diikuti
          color: "#bcbcbc", // Warna cyan untuk dot
          easing: 4, // Kecepatan smoothing dot
        });

        new bubbleCursor({
          radius: 2, // Radius bubble
        });
      }
    };

    // Jalankan saat pertama kali komponen dimuat
    initializeCursorEffects();

    // Event listener untuk mendeteksi perubahan ukuran layar
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // Jika ukuran layar diubah menjadi lebih besar dari 768px
        initializeCursorEffects();
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null; // Tidak perlu menampilkan elemen untuk efek kursor
};

export default CustomCursor;
