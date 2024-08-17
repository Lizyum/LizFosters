import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

function Gallery(props) {
  return (
    <RowsPhotoAlbum
      photos={props.animal_photos}
    />
  );
}

export default Gallery;