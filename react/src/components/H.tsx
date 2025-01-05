export default function H(props) {
  const Heading = `h${props.level}` as keyof JSX.IntrinsicElements;

  return (
    <Heading
      className="ce-paragraph cdx-block"
      contenteditable="true"
      data-placeholder-active=""
      data-empty={props?.text?.length !== 0}
    >
      {props.text}
    </Heading>
  );
}
