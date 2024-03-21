import './CoreConcept.css'


export default function CoreConcept({ img, title, description }) {
  return (
    <li>
      <img src={img} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
