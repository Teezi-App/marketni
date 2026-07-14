export interface ServiceType {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
  punchline: string;
}

export interface TestimonialType {
  id: string;
  clientName: string;
  businessName: string;
  location: string;
  reviewMessage: string;
  rating: number;
  category: "Retail" | "Professional" | "Health/Wellness" | "Food & Leisure" | "Local Services" | "Startup Brands" | "Clinical Platforms";
  yearTag: string;
}

export interface SocialPostType {
  id: string;
  platform: "instagram" | "x";
  username: string;
  avatarLetter: string;
  avatarColor: string;
  relativeTime: string;
  metrics: {
    likes: number;
    shares: number;
    comments: number;
  };
  mediaType: "image" | "text_only" | "quote";
  mediaUrl?: string;
  captionText: string;
  commentsList: Array<{
    author: string;
    text: string;
    timestamp: string;
  }>;
}

export interface LeadInquiry {
  id: string;
  senderName: string;
  senderEmail: string;
  businessName: string;
  topic: string;
  messageText: string;
  timestamp: string;
  isHandled: boolean;
}
