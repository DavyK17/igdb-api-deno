// Fetch parameters
export interface FetchParams {
  fields: string;
  where?: string;
  sort?: string;
  limit?: number;
}

// Endpoints
export interface AgeRating {
  id: number;
  category: number;
  checksum: string;
  content_descriptions?: number[];
  rating: number;
  rating_cover_url?: string;
  synopsis?: string;
}

export interface AgeRatingContentDescription {
  id: number;
  category: number;
  checksum: string;
  description: string;
}

export interface AlternativeName {
  id: number;
  checksum: string;
  comment: string;
  game: number;
  name: string;
}

export interface Artwork {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  checksum: string;
  game: number;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface Character {
  id: number;
  akas?: string[];
  checksum: string;
  country_name?: string;
  created_at: number;
  description?: string;
  games: number[];
  gender?: number;
  mug_shot?: number;
  name: string;
  slug: string;
  species?: number;
  updated_at: number;
  url: string;
}

export interface CharacterMugShot {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  checksum: string;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface Collection {
  id: number;
  as_child_relations?: number[];
  as_parent_relations?: number[];
  checksum: string;
  created_at: number;
  games: number[];
  name: string;
  slug: string;
  type?: number;
  updated_at: number;
  url: string;
}

export interface CollectionMembership {
  id: number;
  checksum: string;
  collection: number;
  created_at: number;
  game: number;
  type: number;
  updated_at: number;
}

export interface CollectionMembershipType {
  id: number;
  allowed_collection_type: number;
  checksum: string;
  created_at: number;
  description: string;
  name: string;
  updated_at: number;
}

export interface CollectionRelation {
  id: number;
  checksum: string;
  child_collection: number;
  created_at: number;
  parent_collection: number;
  type: number;
  updated_at: number;
}

export interface CollectionRelationType {
  id: number;
  allowed_child_type: number;
  allowed_parent_type: number;
  checksum: string;
  created_at: number;
  description: string;
  name: string;
  updated_at: number;
}

export interface CollectionType {
  id: number;
  checksum: string;
  created_at: number;
  description: string;
  name: string;
  updated_at: number;
}

export interface Company {
  id: number;
  change_date?: number;
  change_date_category: number;
  changed_company_id?: number;
  checksum: string;
  country?: number;
  created_at: number;
  description?: string;
  developed: number[];
  logo?: number;
  name: string;
  parent?: number;
  published?: number[];
  slug: string;
  start_date?: number;
  start_date_category: number;
  updated_at: number;
  url: string;
  websites?: number[];
}

export interface CompanyLogo {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  checksum: string;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface CompanyWebsite {
  id: number;
  category: number;
  checksum: string;
  trusted: boolean;
  url: string;
}

export interface Cover {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  checksum: string;
  game: number;
  game_localization?: number;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface Event {
  id: number;
  checksum: string;
  created_at: number;
  description?: string;
  end_time?: number;
  event_logo?: number;
  event_networks?: number[];
  games: number[];
  live_stream_url?: string;
  name: string;
  slug: string;
  start_time?: number;
  time_zone?: string;
  updated_at: number;
  videos?: number[];
}

export interface EventLogo {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  checksum: string;
  created_at: number;
  event: number;
  height: number;
  image_id: string;
  updated_at: number;
  url: string;
  width: number;
}

export interface EventNetwork {
  id: number;
  checksum: string;
  created_at: number;
  event: number;
  network_type: number;
  updated_at: number;
  url: string;
}

export interface ExternalGame {
  id: number;
  category: number;
  checksum: string;
  countries?: number[];
  created_at: number;
  game: number;
  media?: number;
  name: string;
  platform?: number;
  uid: string;
  updated_at: number;
  url: string;
  year?: number;
}

export interface Franchise {
  id: number;
  checksum: string;
  created_at: number;
  games: number[];
  name: string;
  slug: string;
  updated_at: number;
  url: string;
}

export interface Game {
  id: number;
  age_ratings?: number[];
  aggregated_rating?: number;
  aggregated_rating_count?: number;
  alternative_names?: number[];
  artworks?: number[];
  bundles?: number[];
  category: number;
  checksum: string;
  collection?: number;
  collections?: number[];
  cover?: number;
  created_at: number;
  dlcs?: number[];
  expanded_games?: number[];
  expansions?: number[];
  external_games?: number[];
  first_release_date?: number;
  forks?: number[];
  franchise?: number;
  franchises?: number[];
  game_engines?: number[];
  game_localizations?: number[];
  game_modes?: number[];
  genres?: number[];
  hypes?: number;
  involved_companies?: number[];
  keywords?: number[];
  language_supports?: number[];
  multiplayer_modes?: number[];
  name: string;
  parent_game?: number;
  platforms: number[];
  player_perspectives?: number[];
  ports?: number[];
  rating?: number;
  rating_count?: number;
  release_dates?: number[];
  remasters?: number[];
  screenshots?: number[];
  similar_games?: number[];
  slug: string;
  standalone_expansions?: number[];
  status?: number;
  storyline?: string;
  summary?: string;
  tags?: number[];
  themes?: number[];
  total_rating?: number;
  total_rating_count?: number;
  updated_at: number;
  url: string;
  version_parent?: number;
  version_title?: string;
  videos?: number[];
  websites: number[];
}

export interface GameEngine {
  id: number;
  checksum: string;
  companies?: number[];
  created_at: number;
  description?: string;
  logo?: number;
  name: string;
  platforms?: number[];
  slug: string;
  updated_at: number;
  url: string;
}

export interface GameEngineLogo {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  checksum: string;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface GameLocalization {
  id: number;
  checksum: string;
  cover?: number;
  created_at: number;
  game: number;
  name: string;
  region: number;
  updated_at: number;
}

export interface GameMode {
  id: number;
  checksum: string;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
}

export interface GameVersion {
  id: number;
  checksum: string;
  created_at: number;
  features?: number[];
  game: number;
  games?: number[];
  updated_at: number;
  url: string;
}

export interface GameVersionFeature {
  id: number;
  category?: number;
  checksum: string;
  description?: string;
  position: number;
  title: string;
  values?: number[];
}

export interface GameVersionFeatureValue {
  id: number;
  checksum: string;
  game: number;
  game_feature: number;
  included_feature: number;
  note?: string;
}

export interface GameVideo {
  id: number;
  checksum: string;
  game: number;
  name: string;
  video_id: string;
}

export interface Genre {
  id: number;
  checksum: string;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
}

export interface InvolvedCompany {
  id: number;
  checksum: string;
  company: number;
  created_at: number;
  developer: boolean;
  game: number;
  porting: boolean;
  publisher: boolean;
  supporting: boolean;
  updated_at: number;
}

export interface Keyword {
  id: number;
  checksum: string;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
}

export interface Language {
  id: number;
  checksum: string;
  created_at: number;
  locale: string;
  name: string;
  native_name: string;
  updated_at: number;
}

export interface LanguageSupport {
  id: number;
  checksum: string;
  created_at: number;
  game: number;
  language: number;
  language_support_type: number;
  updated_at: number;
}

export interface LanguageSupportType {
  id: number;
  checksum: string;
  created_at: number;
  name: string;
  updated_at: number;
}

export interface MultiplayerMode {
  id: number;
  campaigncoop: boolean;
  checksum: string;
  dropin: boolean;
  game: number;
  lancoop: boolean;
  offlinecoop: boolean;
  offlinecoopmax: number;
  offlinemax: number;
  onlinecoop: boolean;
  onlinecoopmax: number;
  onlinemax: number;
  platform: number;
  splitscreen: boolean;
  splitscreenonline: boolean;
}

export interface NetworkType {
  id: number;
  checksum: string;
  created_at: number;
  event_networks: number[];
  name: string;
  updated_at: number;
}

export interface Platform {
  id: number;
  abbreviation?: string;
  alternative_name?: string;
  category: number;
  checksum: string;
  created_at: number;
  generation: number;
  name: string;
  platform_family?: number;
  platform_logo: number;
  slug: string;
  summary?: string;
  updated_at: number;
  url: string;
  versions: number[];
  websites?: number[];
}

export interface PlatformFamily {
  id: number;
  checksum: string;
  name: string;
  slug: string;
}

export interface PlatformLogo {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  checksum: string;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface PlatformVersion {
  id: number;
  checksum: string;
  companies?: number[];
  connectivity?: string;
  cpu?: string;
  graphics?: string;
  main_manufacturer?: number;
  media?: string;
  memory?: string;
  name: string;
  os?: string;
  output?: string;
  platform_logo?: number;
  platform_version_release_dates?: number[];
  resolutions?: string;
  slug: string;
  sound?: string;
  storage?: string;
  summary?: string;
  url: string;
}

export interface PlatformVersionCompany {
  id: number;
  checksum: string;
  comment: string;
  company: number;
  developer: boolean;
  manufacturer: boolean;
}

export interface PlatformVersionReleaseDate {
  id: number;
  category: number;
  checksum: string;
  created_at: number;
  date: number;
  human: string;
  m: number;
  platform_version: number;
  region: number;
  updated_at: number;
  y: number;
}

export interface PlatformWebsite {
  id: number;
  category: number;
  checksum: string;
  trusted: boolean;
  url: string;
}

export interface PlayerPerspective {
  id: number;
  checksum: string;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
}

export interface Region {
  id: number;
  category: string;
  checksum: string;
  created_at: number;
  identifier: string;
  name: string;
  updated_at: number;
}

export interface ReleaseDate {
  id: number;
  category: number;
  checksum: string;
  created_at: number;
  date: number;
  game: number;
  human: string;
  m: number;
  platform: number;
  region: number;
  updated_at: number;
  y: number;
}

export interface ReleaseDateStatus {
  id: number;
  checksum: string;
  created_at: number;
  description: string;
  name: string;
  updated_at: number;
}

export interface Screenshot {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  checksum: string;
  game: number;
  height: number;
  image_id: string;
  url: string;
  width: number;
}

export interface Search {
  id: number;
  alternative_name: string;
  character: number;
  checksum: string;
  collection: number;
  company: number;
  description: string;
  game: number;
  name: string;
  platform: number;
  published_at: number;
  test_dummy: number;
  theme: number;
}

export interface Theme {
  id: number;
  checksum: string;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
}

export interface Website {
  id: number;
  category: number;
  checksum: string;
  game: number;
  trusted: boolean;
  url: string;
}

// Client
export interface IGDBClient {
  getAccessToken(): Promise<void>;
  ageRatings(params: FetchParams): Promise<AgeRating[]>;
  alternativeNames(params: FetchParams): Promise<AlternativeName[]>;
  artwork(params: FetchParams): Promise<Artwork[]>;
  characters(params: FetchParams): Promise<Character[]>;
  collections(params: FetchParams): Promise<Collection[]>;
  collectionMemberships(params: FetchParams): Promise<CollectionMembership[]>;
  collectionMembershipTypes(params: FetchParams): Promise<CollectionMembershipType[]>;
  collectionRelations(params: FetchParams): Promise<CollectionRelation[]>;
  collectionRelationTypes(params: FetchParams): Promise<CollectionRelationType[]>;
  collectionTypes(params: FetchParams): Promise<CollectionType[]>;
  companies(params: FetchParams): Promise<Company[]>;
  companyLogos(params: FetchParams): Promise<CompanyLogo[]>;
  companyWebsites(params: FetchParams): Promise<CompanyWebsite[]>;
  covers(params: FetchParams): Promise<Cover[]>;
  events(params: FetchParams): Promise<Event[]>;
  eventLogos(params: FetchParams): Promise<EventLogo[]>;
  eventNetworks(params: FetchParams): Promise<EventNetwork[]>;
  externalGames(params: FetchParams): Promise<ExternalGame[]>;
  franchises(params: FetchParams): Promise<Franchise[]>;
  games(params: FetchParams): Promise<Game[]>;
  gameEngines(params: FetchParams): Promise<GameEngine[]>;
  gameEngineLogos(params: FetchParams): Promise<GameEngineLogo[]>;
  gameLocalizations(params: FetchParams): Promise<GameLocalization[]>;
  gameModes(params: FetchParams): Promise<GameMode[]>;
  gameVersions(params: FetchParams): Promise<GameVersion[]>;
  gameVersionFeatures(params: FetchParams): Promise<GameVersionFeature[]>;
  gameVersionFeatureValues(params: FetchParams): Promise<GameVersionFeatureValue[]>;
  gameVideos(params: FetchParams): Promise<GameVideo[]>;
  genres(params: FetchParams): Promise<Genre[]>;
  involvedCompanies(params: FetchParams): Promise<InvolvedCompany[]>;
  keywords(params: FetchParams): Promise<Keyword[]>;
  languages(params: FetchParams): Promise<Language[]>;
  languageSupports(params: FetchParams): Promise<LanguageSupport[]>;
  languageSupportTypes(params: FetchParams): Promise<LanguageSupportType[]>;
  multiplayerModes(params: FetchParams): Promise<MultiplayerMode[]>;
  networkTypes(params: FetchParams): Promise<NetworkType[]>;
  platforms(params: FetchParams): Promise<Platform[]>;
  platformFamilies(params: FetchParams): Promise<PlatformFamily[]>;
  platformLogos(params: FetchParams): Promise<PlatformLogo[]>;
  platformVersions(params: FetchParams): Promise<PlatformVersion[]>;
  platformVersionCompanies(params: FetchParams): Promise<PlatformVersionCompany[]>;
  platformVersionReleaseDates(params: FetchParams): Promise<PlatformVersionReleaseDate[]>;
  platformWebsites(params: FetchParams): Promise<PlatformWebsite[]>;
  playerPerspectives(params: FetchParams): Promise<PlayerPerspective[]>;
  regions(params: FetchParams): Promise<Region[]>;
  releaseDates(params: FetchParams): Promise<ReleaseDate[]>;
  releaseDateStatus(params: FetchParams): Promise<ReleaseDateStatus[]>;
  screenshots(params: FetchParams): Promise<Screenshot[]>;
  search(params: FetchParams): Promise<Search[]>;
  themes(params: FetchParams): Promise<Theme[]>;
  websites(params: FetchParams): Promise<Website[]>;
}

