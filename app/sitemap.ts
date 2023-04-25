import getArticleSitemap from "@/components/getArticleSitemap";
import getProjectSitemap from "@/components/getProjectSitemap";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const mainSitemap = [
        {
            url: "https://ferrydermawan.com",
        },
        {
            url: "https://ferrydermawan.com/articles",
        },
        {
            url: "https://ferrydermawan.com/projects",
        },
        {
            url: "https://ferrydermawan.com/about",
        },
    ];
    const getArticles = getArticleSitemap();
    const getProjects = getProjectSitemap();
    const mergeSitemap = [
        ...mainSitemap, 
        ...getArticles, 
        ...getProjects
    ];
    return mergeSitemap;
}
