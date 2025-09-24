import { useState, useEffect } from "react";

const images: string[] = [
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
  const [startIndex, setStartIndex] = useState(0);
  const totalImages = images.length;

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % totalImages);
  };

  // Autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = [
    images[startIndex],
    images[(startIndex + 1) % totalImages],
    images[(startIndex + 2) % totalImages],
  ];

  return (
    <div className="relative max-w-5xl mx-auto my-16">
      {/* Images */}
      <div className="flex gap-4 justify-center overflow-hidden">
        {visibleImages.map((img, idx) => (
          <div
            key={idx}
            className="flex-1 flex justify-center items-center bg-white rounded-xl shadow-md p-4"
          >
            <img
              src={img}
              alt={`Slide ${startIndex + idx + 1}`}
              className="max-h-24 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 right-2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 left-2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
      >
        &#8594;
      </button>
    </div>
  );
}
