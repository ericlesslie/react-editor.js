export default function P(props) {
  return (
    <p
      className="ce-paragraph cdx-block"
      contenteditable="true"
      data-placeholder=""
      data-empty={props?.text?.length !== 0}
    >
      {props.text}
    </p>
  );
}
