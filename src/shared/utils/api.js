import axios from "axios";

const API_BASE_URL = "https://api.sandbox.voice123.com/providers/search/";

export const searchVoiceActors = async (keywords, page = 1) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        service: "voice_over",
        keywords,
        page,
      },
    });
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error(
      error.response?.data?.message || "Failed to fetch voice actors"
    );
  }
};
