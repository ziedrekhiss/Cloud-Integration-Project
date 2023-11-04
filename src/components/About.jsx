import "../styles/About.css"
import Map from "./Map"
export default function About() {
  return (
    <div className="container">
      <h3>
        Location
      </h3>
      <div className="location-box">
          <Map/>
      </div>
    </div>
  )
}
