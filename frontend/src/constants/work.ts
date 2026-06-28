/** A portfolio work item with YouTube embed support. */
export interface WorkItem {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly youtubeId: string;
  readonly description: string;
  readonly featured?: boolean;
}

/**
 * Official portfolio from the Outlast Media Creations YouTube channel.
 * YouTube channel: https://www.youtube.com/@outlastmediacreations
 */
export const FEATURED_WORK: readonly WorkItem[] = [
  {
    id: "bechainiyann-full",
    title: "Bechainiyann",
    category: "Music Video",
    youtubeId: "uZIrcx1fPbI",
    description:
      "A cinematic love story set in Bhilai — featuring Shivani Banchhor & Saurabh Verma. Singer: Roopansh Pawar.",
    featured: true,
  },
  {
    id: "bechainiyann-trailer",
    title: "Bechainiyann — Official Trailer",
    category: "Trailer",
    youtubeId: "38iii_E8I_k",
    description:
      "Official trailer for 'Bechainiyann', a project by Outlast Media Creations showcasing cinematic romance.",
    featured: false,
  },
];
