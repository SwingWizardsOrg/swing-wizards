import logo  from "../../../images/logo.png"

const Logo =() =>{

    return(
        <a href="/" className="flex items-center p-2">
              <img width={60} height={60} src={logo} alt="logo" />
              <span>
                <h2>
                  <b>
                    <span className="text-blue-900">S</span>wing{" "}
                    <span className="text-blue-900">W</span>izards
                  </b>
                </h2>
              </span>
            </a>
    )
}

export default Logo;