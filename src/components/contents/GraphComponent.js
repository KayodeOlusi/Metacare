// Icons
import { CgBox } from "react-icons/cg";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
//Component
import GraphDiagram from "./GraphDiagram";
// Styles
import {
	AverageTime,
	GraphDetials,
	GraphMonth,
	GraphResult,
	GraphResultHeading,
	GraphResultHeadingSpec,
	GraphResultHeadingText,
	ResponseTime,
	SingleGraphContainer,
	Wrapper,
} from "../../styles/Content";

const GraphComponent = ({ options, data, color }) => {
	return (
		<SingleGraphContainer>
			<GraphResult>
				<GraphResultHeading>
					<GraphResultHeadingText>
						<h3>Average Response Time</h3>
						<h6>+4.14%</h6>
					</GraphResultHeadingText>

					<GraphResultHeadingSpec>
						<MdCheckBoxOutlineBlank
							className="graph__emptybox"
							style={{
								color,
								backgroundColor: color,
							}}
						/>
						<h3>High Priority</h3>
						<hr />
						<GraphMonth>
							<h3>This Month</h3>
							<CgBox className="graph__box" />
						</GraphMonth>
					</GraphResultHeadingSpec>
				</GraphResultHeading>

				<GraphDiagram options={options} data={data} />
			</GraphResult>

			<GraphDetials>
				<Wrapper>
					<AverageTime>
						<h6>Average Response Time</h6>
						<h3>30 Mins</h3>
					</AverageTime>
					<ResponseTime>
						<h6>Response Time</h6>
						<h3>1 Hour 30 Mins</h3>
					</ResponseTime>
				</Wrapper>
			</GraphDetials>
		</SingleGraphContainer>
	);
};

export default GraphComponent;
