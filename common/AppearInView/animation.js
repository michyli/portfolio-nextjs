export const slideUp = {
  initial: {
    y: "100%"
  },
  open: (i) => ({
    y: "0%",
    transition: {duration: 0.4, ease: "easeInOut", delay: i}
  }),
  closed: {
    y: "100%",
    transition: {duration: 0.2}
  }
}