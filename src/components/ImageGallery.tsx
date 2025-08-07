import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  dimensions?: string;
  materials?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: number;
}

const ImageGallery = ({ images, columns = 3 }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    }
  };

  // Add keyboard event listeners
  useState(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[columns] || "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <div className={`grid ${gridCols} gap-6`}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="relative overflow-hidden rounded-lg bg-gradient-warm shadow-soft hover:shadow-gallery transition-all duration-500 group-hover:scale-[1.02]">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {image.caption && (
              <div className="mt-3 space-y-1">
                <h3 className="font-medium text-foreground">{image.caption}</h3>
                {image.dimensions && (
                  <p className="text-sm text-muted-foreground">{image.dimensions}</p>
                )}
                {image.materials && (
                  <p className="text-sm text-muted-foreground">{image.materials}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X size={24} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft size={24} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight size={24} />
          </Button>

          <div className="max-w-6xl max-h-full flex flex-col items-center">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            {images[selectedImage].caption && (
              <div className="mt-4 text-center text-white">
                <h3 className="text-lg font-medium">{images[selectedImage].caption}</h3>
                {images[selectedImage].dimensions && (
                  <p className="text-sm opacity-80">{images[selectedImage].dimensions}</p>
                )}
                {images[selectedImage].materials && (
                  <p className="text-sm opacity-80">{images[selectedImage].materials}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;