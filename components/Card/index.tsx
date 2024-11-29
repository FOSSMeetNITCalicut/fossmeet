import styles from "./Card.module.css";

const Card = ({ img_name, alt }) => {
  // let location = "/gallery_images/".concat(img_name);
  return (
    <div>
      <div className={styles.image_container}>
        <img src={img_name} alt={alt} className={styles.image_card} />
      </div>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  alt: "FOSSMeet picture",
};
