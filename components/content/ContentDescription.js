
const ContentDescription = (props) =>{
	const {textColor, description} = props;

	return (
		<>
			<div className="content-description" style={{color : textColor}}>
				<p>{description}</p>
			</div>
		</>
	)
}
  
export default ContentDescription