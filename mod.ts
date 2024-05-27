import type {
  AgeRating,
  AlternativeName,
  Artwork,
  Character,
  Collection,
  CollectionMembership,
  CollectionMembershipType,
  CollectionRelation,
  CollectionRelationType,
  CollectionType,
  Company,
  CompanyLogo,
  CompanyWebsite,
  Cover,
  Event,
  EventLogo,
  EventNetwork,
  ExternalGame,
  FetchParams,
  Franchise,
  Game,
  GameEngine,
  GameEngineLogo,
  GameLocalization,
  GameMode,
  GameVersion,
  GameVersionFeature,
  GameVersionFeatureValue,
  GameVideo,
  Genre,
  InvolvedCompany,
  Keyword,
  Language,
  LanguageSupport,
  LanguageSupportType,
  MultiplayerMode,
  NetworkType,
  Platform,
  PlatformFamily,
  PlatformLogo,
  PlatformVersion,
  PlatformVersionCompany,
  PlatformVersionReleaseDate,
  PlatformWebsite,
  PlayerPerspective,
  Region,
  ReleaseDate,
  ReleaseDateStatus,
  Screenshot,
  Search,
  Theme,
  Website,
} from "./types.d.ts";

export class IgdbClient {
  // Properties
  private token?: string;
  private clientId?: string;
  private clientSecret?: string;
  private BASE_URL = "https://api.igdb.com/v4";

  // Constructor
  constructor(clientId: string, clientSecret: string) {
    if (!clientId) throw new Error("Client ID is undefined");
    if (!clientSecret) throw new Error("Client secret is undefined");

    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  // Access token method
  public async getAccessToken(): Promise<void> {
    try {
      if (this.clientId === undefined) throw new Error("Client ID is undefined");
      if (this.clientSecret === undefined) throw new Error("Client secret is undefined");

      const authURL = new URL(
        `https://id.twitch.tv/oauth2/token?${new URLSearchParams({
          client_id: this.clientId,
          client_secret: this.clientSecret,
          grant_type: "client_credentials",
        })}`
      );

      const { access_token } = await (await fetch(authURL, { method: "POST" })).json();
      this.token = access_token;
    } catch (err) {
      console.error(err);
    }
  }

  // Endpoint methods
  public async ageRatings(params: FetchParams): Promise<AgeRating[]> {
    const body = this.formatParams(params);
    return await this.api("age_ratings", body);
  }

  public async alternativeNames(params: FetchParams): Promise<AlternativeName[]> {
    const body = this.formatParams(params);
    return await this.api("alternative_names", body);
  }

  public async artwork(params: FetchParams): Promise<Artwork[]> {
    const body = this.formatParams(params);
    return await this.api("artworks", body);
  }

  public async characters(params: FetchParams): Promise<Character[]> {
    const body = this.formatParams(params);
    return await this.api("characters", body);
  }

  public async collections(params: FetchParams): Promise<Collection[]> {
    const body = this.formatParams(params);
    return await this.api("collections", body);
  }

  public async collectionMemberships(params: FetchParams): Promise<CollectionMembership[]> {
    const body = this.formatParams(params);
    return await this.api("collection_memberships", body);
  }

  public async collectionMembershipTypes(params: FetchParams): Promise<CollectionMembershipType[]> {
    const body = this.formatParams(params);
    return await this.api("collection_membership_types", body);
  }

  public async collectionRelations(params: FetchParams): Promise<CollectionRelation[]> {
    const body = this.formatParams(params);
    return await this.api("collection_relations", body);
  }

  public async collectionRelationTypes(params: FetchParams): Promise<CollectionRelationType[]> {
    const body = this.formatParams(params);
    return await this.api("collection_relation_types", body);
  }

  public async collectionTypes(params: FetchParams): Promise<CollectionType[]> {
    const body = this.formatParams(params);
    return await this.api("collection_types", body);
  }

  public async companies(params: FetchParams): Promise<Company[]> {
    const body = this.formatParams(params);
    return await this.api("companies", body);
  }

  public async companyLogos(params: FetchParams): Promise<CompanyLogo[]> {
    const body = this.formatParams(params);
    return await this.api("company_logos", body);
  }

  public async companyWebsites(params: FetchParams): Promise<CompanyWebsite[]> {
    const body = this.formatParams(params);
    return await this.api("company_websites", body);
  }

  public async covers(params: FetchParams): Promise<Cover[]> {
    const body = this.formatParams(params);
    return await this.api("covers", body);
  }

  public async events(params: FetchParams): Promise<Event[]> {
    const body = this.formatParams(params);
    return await this.api("events", body);
  }

  public async eventLogos(params: FetchParams): Promise<EventLogo[]> {
    const body = this.formatParams(params);
    return await this.api("event_logos", body);
  }

  public async eventNetworks(params: FetchParams): Promise<EventNetwork[]> {
    const body = this.formatParams(params);
    return await this.api("event_networks", body);
  }

  public async externalGames(params: FetchParams): Promise<ExternalGame[]> {
    const body = this.formatParams(params);
    return await this.api("external_games", body);
  }

  public async franchises(params: FetchParams): Promise<Franchise[]> {
    const body = this.formatParams(params);
    return await this.api("franchises", body);
  }

  public async games(params: FetchParams): Promise<Game[]> {
    const body = this.formatParams(params);
    return await this.api("games", body);
  }

  public async gameEngines(params: FetchParams): Promise<GameEngine[]> {
    const body = this.formatParams(params);
    return await this.api("game_engines", body);
  }

  public async gameEngineLogos(params: FetchParams): Promise<GameEngineLogo[]> {
    const body = this.formatParams(params);
    return await this.api("game_engine_logos", body);
  }

  public async gameLocalizations(params: FetchParams): Promise<GameLocalization[]> {
    const body = this.formatParams(params);
    return await this.api("game_localizations", body);
  }

  public async gameModes(params: FetchParams): Promise<GameMode[]> {
    const body = this.formatParams(params);
    return await this.api("game_modes", body);
  }

  public async gameVersions(params: FetchParams): Promise<GameVersion[]> {
    const body = this.formatParams(params);
    return await this.api("game_versions", body);
  }

  public async gameVersionFeatures(params: FetchParams): Promise<GameVersionFeature[]> {
    const body = this.formatParams(params);
    return await this.api("game_version_features", body);
  }

  public async gameVersionFeatureValues(params: FetchParams): Promise<GameVersionFeatureValue[]> {
    const body = this.formatParams(params);
    return await this.api("game_version_feature_values", body);
  }

  public async gameVideos(params: FetchParams): Promise<GameVideo[]> {
    const body = this.formatParams(params);
    return await this.api("game_videos", body);
  }

  public async genres(params: FetchParams): Promise<Genre[]> {
    const body = this.formatParams(params);
    return await this.api("genres", body);
  }

  public async involvedCompanies(params: FetchParams): Promise<InvolvedCompany[]> {
    const body = this.formatParams(params);
    return await this.api("involved_companies", body);
  }

  public async keywords(params: FetchParams): Promise<Keyword[]> {
    const body = this.formatParams(params);
    return await this.api("keywords", body);
  }

  public async languages(params: FetchParams): Promise<Language[]> {
    const body = this.formatParams(params);
    return await this.api("languages", body);
  }

  public async languageSupports(params: FetchParams): Promise<LanguageSupport[]> {
    const body = this.formatParams(params);
    return await this.api("language_supports", body);
  }

  public async languageSupportTypes(params: FetchParams): Promise<LanguageSupportType[]> {
    const body = this.formatParams(params);
    return await this.api("language_support_types", body);
  }

  public async multiplayerModes(params: FetchParams): Promise<MultiplayerMode[]> {
    const body = this.formatParams(params);
    return await this.api("multiplayer_modes", body);
  }

  public async networkTypes(params: FetchParams): Promise<NetworkType[]> {
    const body = this.formatParams(params);
    return await this.api("network_types", body);
  }

  public async platforms(params: FetchParams): Promise<Platform[]> {
    const body = this.formatParams(params);
    return await this.api("platforms", body);
  }

  public async platformFamilies(params: FetchParams): Promise<PlatformFamily[]> {
    const body = this.formatParams(params);
    return await this.api("platform_families", body);
  }

  public async platformLogos(params: FetchParams): Promise<PlatformLogo[]> {
    const body = this.formatParams(params);
    return await this.api("platform_logos", body);
  }

  public async platformVersions(params: FetchParams): Promise<PlatformVersion[]> {
    const body = this.formatParams(params);
    return await this.api("platform_versions", body);
  }

  public async platformVersionCompanies(params: FetchParams): Promise<PlatformVersionCompany[]> {
    const body = this.formatParams(params);
    return await this.api("platform_version_companies", body);
  }

  public async platformVersionReleaseDates(params: FetchParams): Promise<PlatformVersionReleaseDate[]> {
    const body = this.formatParams(params);
    return await this.api("platform_version_release_dates", body);
  }

  public async platformWebsites(params: FetchParams): Promise<PlatformWebsite[]> {
    const body = this.formatParams(params);
    return await this.api("platform_websites", body);
  }

  public async playerPerspectives(params: FetchParams): Promise<PlayerPerspective[]> {
    const body = this.formatParams(params);
    return await this.api("player_perspectives", body);
  }

  public async regions(params: FetchParams): Promise<Region[]> {
    const body = this.formatParams(params);
    return await this.api("regions", body);
  }

  public async releaseDates(params: FetchParams): Promise<ReleaseDate[]> {
    const body = this.formatParams(params);
    return await this.api("release_dates", body);
  }

  public async releaseDateStatus(params: FetchParams): Promise<ReleaseDateStatus[]> {
    const body = this.formatParams(params);
    return await this.api("release_date_statuses", body);
  }

  public async screenshots(params: FetchParams): Promise<Screenshot[]> {
    const body = this.formatParams(params);
    return await this.api("screenshots", body);
  }

  public async search(params: FetchParams): Promise<Search[]> {
    const body = this.formatParams(params);
    return await this.api("search", body);
  }

  public async themes(params: FetchParams): Promise<Theme[]> {
    const body = this.formatParams(params);
    return await this.api("themes", body);
  }

  public async websites(params: FetchParams): Promise<Website[]> {
    const body = this.formatParams(params);
    return await this.api("websites", body);
  }

  // Private helper methods
  private formatParams(params: FetchParams): string {
    let body = `fields ${params.fields};`;
    if (params.where) body += ` where ${params.where};`;
    if (params.sort) body += ` sort ${params.sort};`;
    if (params.limit) body += ` limit ${params.limit};`;
    return body;
  }

  private async api(endpoint: string, body: string) {
    try {
      // Check if token is defined
      if (!this.token) throw new Error("Token is undefined. Please call getAccessToken() first.");

      // Create URL and requestInit object
      const url = new URL(`${this.BASE_URL}/${endpoint}`);
      const requestInit = {
        method: "POST",
        headers: {
          "Client-ID": this.clientId!,
          Authorization: `Bearer ${this.token}`,
        },
        body,
      };

      // Fetch and return data
      const response = await fetch(url, requestInit);
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  }
}

