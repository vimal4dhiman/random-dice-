const Section = (props) => {
  return (
    <section className={props.sectionCss}>
      <h2 className={props.head}>{props.name}</h2>
      <p className={props.score}>{props.value}</p>
      <div className={props.current}>
        <p className={props.currentLabel}>Current</p>
        <p className={props.currentScore}>{props.currentValue}</p>
      </div>
    </section>
  );
};

export default Section;
