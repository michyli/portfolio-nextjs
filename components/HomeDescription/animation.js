export const slideUp = {
  initial: {
    y: "100%"
  },
  open: (i) => ({
    y: "0%",
    transition: {duration: 0.5, delay: 0.03 * i}
  }),
  closed: {
    y: "100%",
    transition: {duration: 0.2}
  }
}

export const opacity = {
  initial: {
    y: "100%",
    opacity: 0
  },
  open: {
    y: "0%",
    opacity: 1,
    transition: {duration: 0.5}
  },
  closed: {
    opacity: 0,
    transition: {duration: 0.5}
  }
}