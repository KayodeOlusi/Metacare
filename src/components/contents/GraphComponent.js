import styled from "styled-components";
// Icons
import { CgBox } from "react-icons/cg";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const GraphComponent = () => {
	return (
		<SingleGraphContainer>
			<GraphResult>
				<GraphResultHeading>
					<GraphResultHeadingText>
						<h3>Average Response Time</h3>
						<h6>+4.14%</h6>
					</GraphResultHeadingText>

					<GraphResultHeadingSpec>
						<MdCheckBoxOutlineBlank className="graph__emptybox" />
						<h3>High Priority</h3>
						<hr />
						<GraphMonth>
							<h3>This Month</h3>
							<CgBox className="graph__box" />
						</GraphMonth>
					</GraphResultHeadingSpec>
				</GraphResultHeading>

				{/* {Graph component goes herr} */}
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

const SingleGraphContainer = styled.div`
	display: flex;
	align-items: center;
`;

const GraphResult = styled.div`
	flex: 0.7;
	padding: 0px 24px;
`;

const GraphDetials = styled.div`
	flex: 0.3;
	border-left: 1px solid #ecebf5;
`;

const GraphResultHeading = styled.div`
	display: flex;
	justify-content: space-between;
`;

const GraphResultHeadingText = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;

	> h3 {
		font-size: 18px;
		font-weight: 600;
		line-height: 26px;
		color: #060213;
		margin-right: 16px;
		font-family: "Gelion Semi Bold", sans-serif;
	}

	> h6 {
		background-color: rgba(37, 187, 135, 0.1);
		padding: 4px 10px;
		border-radius: 4px;
		color: #25bb87;
		font-size: 12px;
		font-weight: 600;
		line-height: 20px;
		font-family: "Gelion Regular", sans-serif; // change the font to inter
	}
`;

const GraphResultHeadingSpec = styled.div`
	display: flex;
	align-items: center;

	> h3 {
		color: #060213;
		font-weight: 500;
		font-size: 14px;
		line-height: 22px;
		margin-left: 8px;
		font-family: "Gelion Medium", sans-serif;
	}

	> .graph__emptybox {
		width: 10px;
		height: 10px;
		color: #f05d23;
		border-radius: 2px;
		background-color: #f05d23;
	}

	> hr {
		width: 24px;
		transform: rotateZ(90deg);
		border: 1px solid #e1e1eb;
	}
`;

const GraphMonth = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 148px;
	padding: 7px 0px;
	border-radius: 8px;
	border: 1px solid #e1e1eb;

	> h3 {
		font-family: "Gelion Regular", sans-serif;
		font-size: 14px;
		line-height: 22px;
		color: #060213;
	}

	> .graph__box {
		color: #92929d;
	}
`;

const Wrapper = styled.div`
	padding-top: 32px;
	padding-bottom: 32px;
`;

const AverageTime = styled.div`
	width: 187px;
	margin: 0 auto;
	padding: 30px 12px 24px 15px;
	margin-bottom: 18px;
	border: 1px solid #ecebf5;
	background-color: #fafafa;
	border-radius: 10px;

	> h6 {
		color: #696d8c;
		font-size: 14px;
		font-weight: 400;
		line-height: 22px;
		font-family: "Gelion Regular", sans-serif;
	}

	> h3 {
		color: #060213;
		font-weight: 600;
		font-size: 20px;
		line-height: 160%;
		font-family: "Gelion Regular", sans-serif;
	}
`;

const ResponseTime = styled.div`
	width: 187px;
	margin: 0 auto;
	border: 1px solid #ecebf5;
	background-color: #fafafa;
	border-radius: 10px;
	padding: 30px 12px 24px 15px;

	> h6 {
		color: #696d8c;
		font-size: 14px;
		font-weight: 400;
		line-height: 22px;
		font-family: "Gelion Regular", sans-serif;
	}

	> h3 {
		color: #060213;
		font-weight: 600;
		font-size: 20px;
		line-height: 160%;
		font-family: "Gelion Regular", sans-serif;
	}
`;

export default GraphComponent;
