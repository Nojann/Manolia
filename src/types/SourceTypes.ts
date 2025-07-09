export type Metadata = {
  title: string,
  creator: string | null,
  date: Date | null,
  /*subject: string[] | null,
  description: string | null,
  uri: string | null,
  language: string | null,
  licence: string | null,*/
}

export type Source = {
  text: string,
  metadata: Metadata
}

