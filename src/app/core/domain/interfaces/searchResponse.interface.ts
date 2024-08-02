import { AlbumTypeEnum, ArtistType, ItemType, ReleaseDatePrecision } from "../enum/search.enum";
export interface IsearchSpotify {
    tracks: ITracks;
}
export interface ITracks {
    href:     string;
    items:    ISearchSpotify[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
}
export interface ISearchSpotify {
    album:             Album;
    artists:           Artist[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     ExternalUrls;
    href:              string;
    id:                string;
    is_local:          boolean;
    name:              string;
    popularity:        number;
    preview_url:       null | string;
    track_number:      number;
    type:              ItemType;
    uri:               string;
    images?:           Image[];
}
export interface Album {
    album_type:             AlbumTypeEnum;
    artists:                Artist[];
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           string;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumTypeEnum;
    uri:                    string;
}
export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name:          string;
    type:          ArtistType;
    uri:           string;
}
export interface ExternalUrls {
    spotify: string;
}
export interface Image {
    height: number;
    url:    string;
    width:  number;
}
export interface ExternalIDS {
    isrc: string;
}
