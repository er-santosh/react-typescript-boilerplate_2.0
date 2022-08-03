import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ effect = "blur", ...other }: LazyLoadImageProps) => {
  return (
    <LazyLoadImage
      effect={effect}
      width={"100%"}
      style={{
        objectFit: "cover",
        userSelect: "none",
        pointerEvents: "none",
      }}
      {...other}
    />
  );
};

export default LazyImage;
