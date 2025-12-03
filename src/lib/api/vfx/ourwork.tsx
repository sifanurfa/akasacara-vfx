// lib/api/devlogApi.ts atau ourworkApi.ts

import apiClient from "@/lib/apiClient";
import { OurWorkVFX } from "@/types/api/ourwork";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "");

// lib/api/ourworkApi.ts atau devlogApi.ts

export const OurWorkVFXApi = {
  getOurWork: async () => {
    const res = await apiClient.get("/vfx-displays?populate=media");

    return res.data.data.map((item: OurWorkVFX) => {
      // Ambil yang paling bagus & pasti lowercase
      const rawUrl = item.media?.[0]?.url || "";

      const fullImageUrl = rawUrl.startsWith("http")
          ? rawUrl
          : `${API_URL}${rawUrl}`;

      return {
        id: item.id,
        title: item.title,
        year: item.year,
        image: fullImageUrl,
      };
    });
  },
};