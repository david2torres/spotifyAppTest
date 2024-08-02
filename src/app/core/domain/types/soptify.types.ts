import {
  AlbumTypeEnum,
  ArtistType,
  ItemType,
  PlayList,
} from '../enum/search.enum';

export type TSearch =
  | AlbumTypeEnum.Album
  | ArtistType.Artist
  | PlayList.PlayList
  | ItemType.Track;
