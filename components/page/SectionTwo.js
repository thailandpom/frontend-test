import { TEXT_ONE, TEXT_TWO } from "../../constant/text_data";
import MainContent from "../content/MainContent";
import SectionTitle from "./SectionTitle";
import Slide from "./Slide";

const SectionTwo = (props) =>{
	const {className, bg, text, textAlign = 'left'} = props;

	return (
		<>
			<div >
				
				<SectionTitle 
					bg={'#FFFFFF'}
					textAlign={'left'}
					text={'PLAYERS'} 
					className={'section-two'} 
					section={2}
				/>
				<img src="/images/basketball/desktop.png" className="img-centerion-two show-desktop" />
				<img src="/images/basketball/tablet.png" className="img-centerion-two show-tablet" />
				<img src="/images/basketball/mobile.png" className="img-centerion-two show-mobile" />
				{
					TEXT_TWO?.map((val, index) => (
						<MainContent
							key={index}
							bg={val.bg}
							textColor={val.textColor}
							textAlign={val.textAlign}
							number={val.number}
							title={val.title}
							description={val.description}
							section={2}
							className={val.className}
						/>
					))
				}

				<Slide data={TEXT_TWO} />
			</div>
		</>
	)
}
  
export default SectionTwo