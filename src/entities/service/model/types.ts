export interface TechBadge {
  name: string;
  icon: string;
}

export interface DescriptionPart {
  text: string;
  dim: boolean;
}

export interface ServiceState {
  title: string;
  heading: string;
  description: DescriptionPart[];
  techBadges: TechBadge[];
}
