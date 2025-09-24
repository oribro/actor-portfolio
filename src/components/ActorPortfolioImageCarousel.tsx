import { useState } from "react";

const images = [
  "https://www.ht1.co.il/images/haifa_white_logo.png",
  "https://incubator.org.il/wp-content/uploads/2025/04/%D7%9C%D7%95%D7%92%D7%95-%D7%90%D7%99%D7%A0%D7%A7%D7%95%D7%91%D7%98%D7%95%D7%A8.svg",
  "https://i0.wp.com/improvtheater.co.il/wp-content/uploads/2023/02/improv.png",
  "https://www.teatron.org.il/wp-content/uploads/2022/09/logo.svg",
  "https://www.habima.co.il/wp-content/themes/tyco-wp/assets/images/HABIMA-LOGO-2023-he.png",
  "https://www.tzavta.co.il/images/top_logo.svg",
  "https://improvisrael.co.il/wp-content/uploads/2025/06/%D7%9C%D7%95%D7%92%D7%95-%D7%90%D7%99%D7%9E%D7%A4%D7%A8%D7%95%D7%91-%D7%99%D7%A9%D7%A8%D7%90%D7%9C-02-2.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Haifa_logo_official_apperence_dark_%28cropped%29.png/500px-Haifa_logo_official_apperence_dark_%28cropped%29.png",
  "https://www.ono.ac.il/wp-content/uploads/2021/11/logo.png",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto my-16">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-96 object-cover rounded-2xl shadow-lg"
      />

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-gray-800 bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-gray-800 bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
