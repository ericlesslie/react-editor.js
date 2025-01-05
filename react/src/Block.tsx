export function Block({ id, type, data }) {
  // TODO Dynamically choose components
  const components = {
    header: (data) => <Header {...data} />,
    paragraph: (data) => <P {...data} />,
    link: (data) => <Link {...data} />,
    html: (data) => <Html {...data} />,
    img: (data) => <Img {...data} />,
    checklist: (data) => <Checklist {...data} />,
    list: (data) => <List {...data} />,
    embed: (data) => <Embed {...data} />,
    quote: (data) => <Quote {...data} />,
  };

  const Component = components[type];

  return Component ? (
    <div className="ce-block" data-id={id}>
      <div className="ce-block__content">
        <Component {...props} />
      </div>
    </div>
  ) : null;
}
