export default {
  functional: true,
  props: {
    list: String,
    renderFn: {
      type: Function
    }
  },
  render: (h, ctx) => {
    return h('i', ctx.props.list)
  }
}