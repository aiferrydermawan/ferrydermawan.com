import { useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface GiscusProps {
    repo: string;
    repoId: string;
    category: string;
    categoryId: string;
    mapping: string;
    strict: string;
    reactionsEnabled: string;
    emitMetadata: string;
    inputPosition: string;
    lang: string;
}

export default function Giscus({
    repo,
    repoId,
    category,
    categoryId,
    mapping,
    strict,
    reactionsEnabled,
    emitMetadata,
    inputPosition,
    lang,
}: GiscusProps) {
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.setAttribute('data-repo', repo);
        script.setAttribute('data-repo-id', repoId);
        script.setAttribute('data-category', category);
        script.setAttribute('data-category-id', categoryId);
        script.setAttribute('data-mapping', mapping);
        script.setAttribute('data-strict', strict);
        script.setAttribute('data-reactions-enabled', reactionsEnabled);
        script.setAttribute('data-emit-metadata', emitMetadata);
        script.setAttribute('data-input-position', inputPosition);
        script.setAttribute('data-theme', resolvedTheme === 'dark' ? 'dark' : 'light');
        script.setAttribute('data-lang', lang);
        script.crossOrigin = 'anonymous';
        script.async = true;

        const giscusElement = document.getElementById('giscus');
        if (giscusElement) {
            giscusElement.appendChild(script);
        }

        return () => {
            if (giscusElement) {
                giscusElement.innerHTML = '';
            }
        };
    }, [repo, repoId, category, categoryId, mapping, strict, reactionsEnabled, emitMetadata, inputPosition, lang, resolvedTheme]);

    return <div id="giscus" className="mt-8" />;
}
