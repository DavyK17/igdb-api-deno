export class IgdbClient {
  private token?: string
  private clientId?: string
  private clientSecret?: string

  private BASE_URL = 'https://api.igdb.com/v4/'

  constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  public async getAccessToken() {
    try {
      if (this.clientId === undefined) throw new Error('Client ID is undefined')
      if (this.clientSecret === undefined) throw new Error('Client Secret is undefined')

      const authURL = new URL(`https://id.twitch.tv/oauth2/token?${new URLSearchParams({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        grant_type: 'client_credentials'
      })}`)

      const { access_token } = await (await fetch(authURL, { method: 'POST' })).json()
      this.token = access_token
    } catch (err) {
      console.error(err)
    }
  }
}