import apiClient from "@/lib/apiClient";
import { AnnouncementFilm } from "@/types/api/types";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "");

export const AnnouncementFilmApi = {
  getAnnouncement: async () => {
    const res = await apiClient.get("/announcement-films?populate=*");

    return res.data.data.map((item: AnnouncementFilm) => {
      const url = item.media?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;

      return { ...item, image: fullUrl };
    });
  },
};
