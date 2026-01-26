import { useEffect } from 'react';

// Type definition for Google AdSense
interface WindowWithAdSense extends Window {
    adsbygoogle?: Array<Record<string, unknown>>;
}

type AdSenseProps = {
    adSlot?: string;
    adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
    style?: React.CSSProperties;
    className?: string;
    fullWidthResponsive?: boolean;
};

export default function AdSense({
    adSlot,
    adFormat = 'auto',
    style,
    className = '',
    fullWidthResponsive = true,
}: AdSenseProps) {
    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                const windowWithAdSense = window as WindowWithAdSense;
                windowWithAdSense.adsbygoogle = windowWithAdSense.adsbygoogle || [];
                windowWithAdSense.adsbygoogle.push({});
            }
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []);

    return (
        <div className={`adsense-container ${className}`} style={style}>
            <ins
                className="adsbygoogle"
                style={{
                    display: 'block',
                    ...(adFormat === 'horizontal' && { textAlign: 'center' }),
                }}
                data-ad-client="ca-pub-3881248656100970"
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
            />
        </div>
    );
}

// Predefined ad components for common positions
export function AdSenseBanner({ className = '' }: { className?: string }) {
    return (
        <div className={`my-4 ${className}`}>
            <AdSense
                adFormat="horizontal"
                className="w-full"
                style={{ minHeight: '100px' }}
            />
        </div>
    );
}

export function AdSenseInArticle({ className = '' }: { className?: string }) {
    return (
        <div className={`my-8 flex justify-center ${className}`}>
            <AdSense
                adFormat="auto"
                className="w-full max-w-md"
                style={{ minHeight: '250px' }}
            />
        </div>
    );
}

export function AdSenseRectangle({ className = '' }: { className?: string }) {
    return (
        <div className={`my-4 flex justify-center ${className}`}>
            <AdSense
                adFormat="rectangle"
                className="w-full max-w-md"
                style={{ minHeight: '250px' }}
            />
        </div>
    );
}

export function AdSenseVertical({ className = '' }: { className?: string }) {
    return (
        <div className={`my-4 flex justify-center ${className}`}>
            <AdSense
                adFormat="vertical"
                className="w-full max-w-xs"
                style={{ minHeight: '600px' }}
            />
        </div>
    );
}
