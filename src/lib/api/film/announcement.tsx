import apiClient from "@/lib/apiClient";
import { AnnouncementFilm } from "@/types/api/types";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "");

export const AnnouncementFilmApi = {
  getAll: async () => {
    const res = await apiClient.get("/announcement-films?populate=media");

    return res.data.data.map((item: AnnouncementFilm) => {
      const url = item.media?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;

      const formattedDate = item.date
      ? new Date(item.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

      return { ...item, image: fullUrl, date: formattedDate };
    });
  },
  getNews: async () => {
    const res = await apiClient.get("/announcement-films?populate=media&filters[announceType]=News");

    return res.data.data.map((item: AnnouncementFilm) => {
      const url = item.media?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;

      const formattedDate = item.date
      ? new Date(item.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

      return { ...item, image: fullUrl, date: formattedDate };
    });
  },
  getPress: async () => {
    const res = await apiClient.get("/announcement-films?populate=media&filters[announceType]=Press");

    return res.data.data.map((item: AnnouncementFilm) => {
      const url = item.media?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;

      const formattedDate = item.date
      ? new Date(item.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

      return { ...item, image: fullUrl, date: formattedDate };
    });
  },
  getAnnouncement: async () => {
    const res = await apiClient.get("/announcement-films?populate=media&filters[announceType]=Announcement");

    return res.data.data.map((item: AnnouncementFilm) => {
      const url = item.media?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;

      const formattedDate = item.date
      ? new Date(item.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

      return { ...item, image: fullUrl, date: formattedDate };
    });
  },
  getArticle: async () => {
    const res = await apiClient.get("/announcement-films?populate=media&filters[announceType]=Announcement");

    return res.data.data.map((item: AnnouncementFilm) => {
      const url = item.media?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;

      const formattedDate = item.date
      ? new Date(item.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

      return { ...item, image: fullUrl, date: formattedDate };
    });
  },
};
