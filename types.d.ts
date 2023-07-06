export interface FetchParams {
  fields: string,
  where?: string,
  sort?: string,
  limit?: number
}

export interface AgeRating {
  id: number
  category: number
  checksum: string
  content_descriptions?: number[]
  rating: number
  rating_cover_url?: string
  synopsis?: string
}

export interface AlternativeName {
  id: number
  checksum: string
  comment: string
  game: number
  name: string
}

export interface IGDBClient {
  getAccessToken(): Promise<void>
  ageRatings(params: FetchParams): Promise<AgeRating[]>
  ageRatings(params: FetchParams): Promise<AlternativeName[]>
}
