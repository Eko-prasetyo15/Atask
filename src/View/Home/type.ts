export type UserList = {
  avatar_url: string;
  events_url: string;
  followers_url:string;
  following_url : string;
  gists_url: string ;
  gravatar_id : string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  site_admin : boolean

};
export type IParams = [{
  size: string;
  komoditas: string;
  area_kota: string;
  area_provinsi: string;
  price: string;
  tgl_parsed: string;
}]
