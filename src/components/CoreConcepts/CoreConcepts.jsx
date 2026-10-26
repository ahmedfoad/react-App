import PropTypes from "prop-types";

export default function CoreConcepts({ title, description, img }) {
  return (
    <li>
      <img src={img} alt="Stylized atom" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

CoreConcepts.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
