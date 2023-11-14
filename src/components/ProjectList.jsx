export const ProjectList = ({ projects }) => {
  return (
    <div className="container-img">
      {projects.map((item, idx) => (
        <div className="img-item" key={idx}>
          <img src={item.img}/>
        </div>
      ))}
    </div>
  );
};
  