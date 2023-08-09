import { useSpring, animated } from '@react-spring/web'
import { defer } from 'react-router-dom'

function FadeInOnScroll() {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },

    delay: 1000
  })

  return <animated.div style={props}>Hello World</animated.div>
}

export default FadeInOnScroll