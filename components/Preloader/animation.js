export const opacity = {
  initial: {
      opacity: 0,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  animate: {
      opacity: 0.75,
      clipPath: "polygon(0% 49.25%, 100% 49.25%, 100% 49.25%, 0% 49.25%)",
      transition: {
        opacity:{
          duration: .5,
        },
        clipPath: {
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1], 
          delay: 4.5,
        }
      }
  },
}

export const progress = {
  initial: {
    width: "0%",
    y: 0,
  },
  animate: {
    width: "100%",
    y: "-2vh",
    transition: {
      width: {
      duration: 3.5, ease: [0.76, 0, 0.24, 1], delay: 0.75,
      },
      y: {
        duration: 1, ease: [0.76, 0, 0.24, 1], delay: 4.5,
      }
    }
  },
}

export const slideUp = {
  initial: {
      top: 0
  },
  exit: {
      top: "-100vh",
      transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 3.5}
  }
}

export const wordSlide = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-74.7%",
    transition: {duration: 3.5, ease: [0.76, 0, 0.24, 1], delay: 0.75}
  }
}