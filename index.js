export default function generateToc(options = { callback, depth, id }) {
  (options.callback =
    options.callback ??
    function () {
      return;
    }),
    (options.depth = options.depth ?? 2);
  options.id = options.id ?? false;

  function filterHeading(node) {
    return node.type === 'heading' && node.depth <= options.depth;
  }

  function mapHeading(header) {
    let res = {
      depth: header.depth,
      value: header.children[0].value,
    };
    if (options.id) {
      res.id = header.data.id;
    }
    return res;
  }

  function parse(root) {
    const headers = root.children.filter(filterHeading).map(mapHeading);
    options.callback(headers);
  }

  return parse;
}
