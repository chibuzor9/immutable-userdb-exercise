import Card from '../UI/Card';
import Detail from './Detail';

const RenderDetails = (props) => {
	const detailData = props.renderData;

	return (
		<Card>
			{detailData.length > 0 ? (
				detailData.map((detail, index) => (
					<Detail key={index}>
						{`${detail.username} (${detail.age} years old)`}
					</Detail>
                ))
			) : (
				<p>No Data Available</p>
			)}
		</Card>
	);
};

export default RenderDetails;
