import { TEXT_ONE } from "../../constant/text_data";
import MainContent from "../content/MainContent";
import SectionTitle from "./SectionTitle";
import Slide from "./Slide";

const SectionOne = (props) =>{
	const {className, bg, text, textAlign = 'left'} = props;

	return (
		<>
			<div>
				
				<SectionTitle 
					bg={'#FFFFFF'}
					textAlign={'right'}
					text={'ATHLETS'}
					className={'section-one'} 
					section={1}
				/>
				<img src="/images/footballer/desktop.png" className="img-centerion-one show-desktop" />
				<img src="/images/footballer/tablet.png" className="img-centerion-one show-tablet" />
				<img src="/images/footballer/mobile.png" className="img-centerion-one show-mobile" />
				{
					TEXT_ONE?.map((val, index) => (
						<MainContent
							key={index}
							bg={val.bg}
							textColor={val.textColor}
							textAlign={val.textAlign}
							number={val.number}
							title={val.title}
							description={val.description}
							className={val.className}
							section={1}
						/>
					))
				}

				<Slide data={TEXT_ONE} />
			</div>
		</>
	)
}
  
export default SectionOne