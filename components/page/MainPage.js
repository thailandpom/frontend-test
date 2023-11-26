import { TEXT_ONE, TEXT_TWO } from "../../constant/text_data"
import MainContent from "../content/MainContent"
import SectionOne from "./SectionOne"
import SectionTitle from "./SectionTitle"
import SectionTwo from "./SectionTwo"

const MainPage = (props) =>{

	return (
		<>
			<div className="position-relative">

				<SectionOne />
			</div>
			<div className="position-relative">
				<SectionTwo />
			</div>

		</>
	)
}
  
export default MainPage