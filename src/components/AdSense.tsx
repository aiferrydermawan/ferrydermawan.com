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
    showLabel?: boolean;
    labelText?: string;
};

export default function AdSense({
    adSlot,
    adFormat = 'auto',
    style,
    className = '',
    fullWidthResponsive = true,
    showLabel = true,
    labelText = 'Advertisement',
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
        <div 
            className={`adsense-wrapper relative ${className}`}
            style={style}
        >
            {showLabel && (
                <div className="flex justify-center mb-3">
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-medium tracking-wide uppercase">
                        {labelText}
                    </span>
                </div>
            )}
            <div className={`
                adsense-container 
                rounded-lg 
                overflow-hidden 
                border border-gray-200 dark:border-gray-700 
                bg-gray-50 dark:bg-gray-800/30
                shadow-sm
                transition-all duration-200
                hover:shadow-md
            `}>
                <ins
                    className="adsbygoogle block"
                    style={{
                        display: 'block',
                        minHeight: adFormat === 'horizontal' ? '100px' : '250px',
                        ...(adFormat === 'horizontal' && { textAlign: 'center' }),
                    }}
                    data-ad-client="ca-pub-3881248656100970"
                    data-ad-slot={adSlot}
                    data-ad-format={adFormat}
                    data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
                />
            </div>
        </div>
    );
}

// Predefined ad components for common positions
export function AdSenseBanner({ className = '' }: { className?: string }) {
    return (
        <div className={`my-6 ${className}`}>
            <AdSense
                adFormat="horizontal"
                className="w-full"
                showLabel={true}
                labelText="Advertisement"
            />
        </div>
    );
}

export function AdSenseInArticle({ className = '' }: { className?: string }) {
    return (
        <div className={`my-12 flex justify-center ${className}`}>
            <div className="w-full max-w-2xl">
                <AdSense
                    adFormat="auto"
                    className="w-full"
                    showLabel={true}
                    labelText="Advertisement"
                />
            </div>
        </div>
    );
}

export function AdSenseRectangle({ className = '' }: { className?: string }) {
    return (
        <div className={`my-8 flex justify-center ${className}`}>
            <div className="w-full max-w-lg">
                <AdSense
                    adFormat="rectangle"
                    className="w-full"
                    showLabel={true}
                    labelText="Advertisement"
                />
            </div>
        </div>
    );
}

export function AdSenseVertical({ className = '' }: { className?: string }) {
    return (
        <div className={`my-8 flex justify-center ${className}`}>
            <div className="w-full max-w-xs">
                <AdSense
                    adFormat="vertical"
                    className="w-full"
                    showLabel={true}
                    labelText="Advertisement"
                />
            </div>
        </div>
    );
}

// Seamless ad component (no border, minimal styling)
export function AdSenseSeamless({ className = '' }: { className?: string }) {
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
        <div className={`my-8 flex justify-center ${className}`}>
            <div className="w-full max-w-2xl">
                <ins
                    className="adsbygoogle block"
                    style={{
                        display: 'block',
                        minHeight: '250px',
                    }}
                    data-ad-client="ca-pub-3881248656100970"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                />
            </div>
        </div>
    );
}
