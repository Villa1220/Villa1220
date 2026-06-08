/**
 * Global TypeScript contracts shared across the application.
 * Keep these framework-agnostic and free of UI concerns.
 */

export type SocialPlatform = "github" | "linkedin" | "email";

export interface SocialLink {
  readonly platform: SocialPlatform;
  readonly label: string;
  readonly href: string;
}

export type ProjectStatus = "live" | "in-progress" | "archived";
