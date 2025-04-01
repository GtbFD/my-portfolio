import "/src/styles/section.css";

const Section = (props) => {
  return (
    <>
      <div id={props.id} className={props.className}>
        {props.children}
      </div>
    </>
  );
};

export default Section;
