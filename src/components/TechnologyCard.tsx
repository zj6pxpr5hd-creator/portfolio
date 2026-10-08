
type technology = {
  name: string;
  description: string;
};

function TechnologyCard({ name, description }: technology) {
  return (
    <div className="technology-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default TechnologyCard;