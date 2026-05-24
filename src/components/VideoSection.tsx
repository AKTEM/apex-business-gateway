import { useRef, useEffect, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function VideoSection() {
  const { ref, inView } = useInView(0.1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="video"
      className="relative py-20 lg:py-28 bg-brand-black overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="red-accent-line" />
            <span className="text-brand-red-light text-xs font-bold uppercase tracking-widest">
              See Us In Action
            </span>
            <div className="red-accent-line" />
          </div>
          <h2 className="section-title text-white mb-4">
            International Logistics,{' '}
            <span className="text-gradient-red">Delivered</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            From containerized cargo at global ports to seamless import-export operations,
            we connect markets and move commerce across continents with precision and excellence.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative corners */}
          <div className="absolute -top-3 -left-3 w-10 h-10 border-l-2 border-t-2 border-brand-red/60 rounded-tl-sm z-10" />
          <div className="absolute -top-3 -right-3 w-10 h-10 border-r-2 border-t-2 border-brand-red/60 rounded-tr-sm z-10" />
          <div className="absolute -bottom-3 -left-3 w-10 h-10 border-l-2 border-b-2 border-brand-red/60 rounded-bl-sm z-10" />
          <div className="absolute -bottom-3 -right-3 w-10 h-10 border-r-2 border-b-2 border-brand-red/60 rounded-br-sm z-10" />

          {/* Video wrapper */}
          <div className="relative rounded-sm overflow-hidden shadow-red-glow-lg bg-brand-dark-2">
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1280"
            >
              <source src="/videos/akilina-showcase.mp4" type="video/mp4" />
            </video>

            {/* Gradient overlay */}
            <div className="absolute inset-0 video-overlay pointer-events-none" />

            {/* Bottom gradient with text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-red-light">
                      Global Trade & Supply Chain
                    </span>
                  </div>
                  <p className="text-white/80 text-sm font-medium">
                    Container shipping, customs clearance, and international freight forwarding
                  </p>
                </div>
              </div>
            </div>

            {/* Controls overlay */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
              <button
                onClick={togglePlay}
                className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all duration-200 border border-white/10"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                <Play size={16} className={isPlaying ? 'opacity-0' : ''} />
                {!isPlaying && <span className="sr-only">Play</span>}
                {isPlaying && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="3" y="2" width="4" height="12" rx="1" />
                    <rect x="9" y="2" width="4" height="12" rx="1" />
                  </svg>
                )}
              </button>
              <button
                onClick={toggleMute}
                className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all duration-200 border border-white/10"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>

            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 shimmer-bg opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Stats below video */}
          <div
            className={`mt-8 grid grid-cols-3 gap-4 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {[
              { value: '6+', label: 'Geo-Political Zones' },
              { value: '24/7', label: 'Operations Support' },
              { value: 'Global', label: 'Market Reach' },
            ].map((item, i) => (
              <div
                key={item.label}
                className="text-center p-4 bg-brand-dark-2/50 border border-gray-800/50 rounded-sm hover:border-brand-red/30 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="font-display font-black text-xl lg:text-2xl text-brand-red">
                  {item.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
