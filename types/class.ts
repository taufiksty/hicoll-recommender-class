export interface Class {
  id: number;
  name: string;
  image?: string;
  thumbnail?: string;
  description?: string;
  metaDescription?: string;
  level: string;
  classCategoryId: number;
  tags?: string;
  slug: string;
  method?: string;
  media?: string;
  prefixCode?: string;
  materials?: string;
  collaborationFeed?: string;
  instructorId?: number;
  learningLink?: string;
  consultancyLink?: string;
  consultancySchedule?: string;
  groupChatLink?: string;
  registrationCloseDate?: string;
  price: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
