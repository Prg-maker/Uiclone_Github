export interface APIUSER {
  login: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  blog?: string;
  company: string;
  email?: string
  location?:  string
}
export interface APIREPO {
  name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  forks: number;
  html_url: string;
  language?: string;
  description?: string;


}