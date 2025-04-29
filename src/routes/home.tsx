import { useState, useRef, MouseEvent, JSX } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Profile {
  id: number;
  name: string;
  image: string;
}

export default function ProfileCarousel(): JSX.Element {
  // Data provided by the user
  const profiles: Profile[] = [
    {
      id: 1,
      name: "Guler Resulova",
      image: "https://img.freepik.com/free-psd/3d-render-young-businesswoman-with-long-brown-hair-wearing-light-blue-blazer-white-shirt-she-looks-friendly-approachable-perfect-avatar-professional-woman_632498-32059.jpg"
    },
    {
      id: 2,
      name: "Alion GreenHeart",
      image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
    },
    {
      id: 4,
      name: "Heybetova Meleyke",
      image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
    },
    {
      id: 5,
      name: "Seferov Cosqun",
      image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
    }
    ,{
      id: 6,
      name: "Heybetova Meleyke",
      image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
    },
    {
      id: 7,
      name: "Seferov Cosqun",
      image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
    }
  ];

  // For dragging functionality
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [startScrollLeft, setStartScrollLeft] = useState<number>(0);
  
  // Dragging functionality
  const startDragging = (e: MouseEvent<HTMLDivElement>): void => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setStartScrollLeft(carouselRef.current.scrollLeft);
  };
  
  const stopDragging = (): void => {
    setIsDragging(false);
  };
  
  const move = (e: MouseEvent<HTMLDivElement>): void => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const scroll = startScrollLeft - (x - startX);
    carouselRef.current.scrollLeft = scroll;
  };

  // Scroll functions
  const scrollToRight = (): void => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 300;
    }
  };

  const scrollToLeft = (): void => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 300;
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8">
      {/* Carousel Navigation */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
        <button
          onClick={scrollToLeft}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
        <button
          onClick={scrollToRight}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Draggable Carousel Content */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory cursor-grab gap-4 px-4 pb-6 no-scrollbar scroll-smooth"
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={move}
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[260px] flex flex-col flex-shrink-0 snap-center"
          >
            <div className="bg-gray-900 p-6 flex justify-center">
              <div className="relative">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold text-center">
                {profile.name}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* CSS for hiding scrollbar properly */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}