// Data
import {
	AVERAGE_RESPONSE_TIME_DATA,
	AVERAGE_OPTIONS,
	AVERAGE_COLOR,
} from "../../data/average";
import {
	REPLIES_PER_RESOLUTION,
	REPLIES_OPTIONS,
	REPLIES_COLOR,
} from "../../data/replies";
import {
	AVERAGE_RESOLUTION_TIME,
	RESOLUTION_OPTIONS,
	RESOLUTION_COLOR,
} from "../../data/resolution";
import {
	FIRST_CONTACT_RESOLUTION_RATE,
	CONTACT_OPTIONS,
	CONTACT_COLOR,
} from "../../data/contact";
// Components
import GraphComponent from "./GraphComponent";
//Styles
import { GraphContainer } from "../../styles/Content";

const Graph = () => {
	return (
		<GraphContainer>
			<GraphComponent
				data={AVERAGE_RESPONSE_TIME_DATA}
				options={AVERAGE_OPTIONS}
				color={AVERAGE_COLOR}
			/>
			<GraphComponent
				data={REPLIES_PER_RESOLUTION}
				options={REPLIES_OPTIONS}
				color={REPLIES_COLOR}
			/>
			<GraphComponent
				data={AVERAGE_RESOLUTION_TIME}
				options={RESOLUTION_OPTIONS}
				color={RESOLUTION_COLOR}
			/>
			<GraphComponent
				data={FIRST_CONTACT_RESOLUTION_RATE}
				options={CONTACT_OPTIONS}
				color={CONTACT_COLOR}
			/>
		</GraphContainer>
	);
};

export default Graph;
