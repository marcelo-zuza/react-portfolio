import TestNavbar from '../../TestNavbar'
import Main from './Main'
import Footer from '../../Footer'

const SecretWord = () => {
  return (
    <div>
        <TestNavbar />
        <div className="container-lg">
            <div className="container">
                <Main />
            </div>

        </div>
        <Footer />

    </div>
  )
}

export default SecretWord