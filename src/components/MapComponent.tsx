import { useEffect, useRef, useState } from 'react';
import { AlertCircle, MapPin } from 'lucide-react';

interface MapComponentProps {
  center?: { lat: number; lng: number };
  zoom?: number;
}

export default function MapComponent({
  center = { lat: 6.5244, lng: 3.3792 },
  zoom = 13
}: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any | null>(null);
  const markerInstance = useRef<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    if (!apiKey || apiKey === 'your-anon-key-here' || apiKey.includes('your_actual_key')) {
      setError('Google Maps API key not configured. Please add your key to .env file.');
      return;
    }

    const initMap = async () => {
      try {
        const Loader = (await import('@googlemaps/js-api-loader')).Loader;
        const loader = new Loader({
          apiKey,
          version: 'weekly',
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const google = await (loader as any).load();

        if (!mapRef.current) return;

        mapInstance.current = new google.maps.Map(mapRef.current, {
          center,
          zoom,
          mapTypeId: 'roadmap',
          fullscreenControl: true,
          mapTypeControl: true,
          streetViewControl: true,
          zoomControl: true,
          styles: [
            {
              featureType: 'all',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#616161' }],
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#e0e0e0' }],
            },
            {
              featureType: 'landscape',
              elementType: 'geometry.fill',
              stylers: [{ color: '#f5f5f5' }],
            },
            {
              featureType: 'poi',
              elementType: 'geometry.fill',
              stylers: [{ color: '#eeeeee' }],
            },
            {
              featureType: 'road',
              elementType: 'geometry.fill',
              stylers: [{ color: '#ffffff' }],
            },
            {
              featureType: 'water',
              elementType: 'geometry.fill',
              stylers: [{ color: '#c9c9c9' }],
            },
          ],
        });

        markerInstance.current = new google.maps.Marker({
          position: center,
          map: mapInstance.current,
          title: 'Akilina Nigeria Limited - Head Office',
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: '#C41E3A',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2.5,
          },
          animation: google.maps.Animation.DROP,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
              <div style="font-weight: bold; color: #0a0a0a; margin-bottom: 4px; font-size: 14px;">
                Akilina Nigeria Limited
              </div>
              <div style="color: #666; font-size: 12px; margin-bottom: 3px;">
                Head Office
              </div>
              <div style="color: #C41E3A; font-weight: 600; font-size: 12px;">
                Lagos, Nigeria
              </div>
            </div>
          `,
          maxWidth: 280,
        });

        if (markerInstance.current) {
          markerInstance.current.addListener('click', () => {
            if (mapInstance.current && markerInstance.current) {
              infoWindow.open(mapInstance.current, markerInstance.current);
            }
          });
        }

        setTimeout(() => {
          if (mapInstance.current && markerInstance.current) {
            infoWindow.open(mapInstance.current, markerInstance.current);
          }
        }, 500);

        if (mapInstance.current) {
          mapInstance.current.addListener('idle', () => {
            if (markerInstance.current) {
              markerInstance.current.setAnimation(null);
            }
          });
        }

      } catch (err) {
        console.error('Error loading Google Maps:', err);
        setError('Failed to load Google Maps. Please check your API key.');
      }
    };

    initMap();
  }, [center, zoom]);

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-brand-dark-2 dark:to-brand-dark-3 p-6 rounded-sm">
        <div className="flex flex-col items-center gap-4 max-w-sm text-center">
          <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
            <AlertCircle className="text-red-600 dark:text-red-400" size={28} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Map Setup Required</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{error}</p>
            <div className="text-xs text-gray-500 dark:text-gray-500 bg-gray-200 dark:bg-brand-dark-2/50 rounded px-3 py-2">
              <strong>Quick Setup:</strong>
              <ol className="mt-2 text-left space-y-1">
                <li>1. Visit Google Cloud Console</li>
                <li>2. Create project & enable Maps JavaScript API</li>
                <li>3. Get an API key from Credentials</li>
                <li>4. Add to .env: VITE_GOOGLE_MAPS_API_KEY=your_key</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-brand-dark-2/90 px-3 py-2 rounded-sm flex items-center gap-2 text-xs font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">
          <MapPin size={14} className="text-brand-red" />
          Lagos, Nigeria
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      className="w-full h-full rounded-sm"
      style={{
        minHeight: '100%',
        backgroundColor: '#e0e0e0',
      }}
    />
  );
}
