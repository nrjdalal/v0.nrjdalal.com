// Brand identity for this app: the single source a fork edits to rebrand. web reads it via lib/config.ts.
export const site = {
  name: "v0.nrjdalal.com",
  description: "Personal site and blog of Neeraj Dalal.",
  tagline: "Writing on web development, the tools I use, and the things I build.",
  social: {
    github: "https://github.com/nrjdalal",
    x: "",
    discord: "",
  },
  // Local-only dev agent identity (api/hono agents router).
  agent: {
    name: "LocalAgent",
    email: "agent@local.host",
  },
  // Injectable long-form text blocks. A product sets its own, or leaves them empty.
  apiReferenceDescription: "",
  llmsFullPreamble: "",
} as const

export type Site = typeof site
