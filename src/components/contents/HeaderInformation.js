import styled from "styled-components";
// Icons
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

// Fix the buttons and do the graph

const HederInformation = () => {
	return (
		<HeaderInformationContainer>
			<HeaderInformationContents>
				<HeaderInformationText>
					<h1>Efficiency Analytics</h1>
				</HeaderInformationText>

				<HeaderInformationWidgets>
					<HeaderInformationSearch>
						<FiSearch className="headerinfo__searchicon" />
						<input type="text" placeholder="Search" />
					</HeaderInformationSearch>
					<HeaderInormationFilter>
						<h3>Filter Options</h3>
						<MdKeyboardArrowDown />
					</HeaderInormationFilter>
				</HeaderInformationWidgets>

				<hr />

				<HeaderInformationExport>
					<h3>Export</h3>
				</HeaderInformationExport>
			</HeaderInformationContents>
		</HeaderInformationContainer>
	);
};

const HeaderInformationContainer = styled.div`
	width: 1024px;
	margin: 0 auto;
	padding: 20px 0px;
`;

const HeaderInformationContents = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	> hr {
		width: 20px;
		transform: rotateZ(90deg);
		border: 1px solid #ecebf5;
	}
`;

const HeaderInformationText = styled.div`
	font-family: "Gelion Semi Bold", sans-serif;

	> h1 {
		color: #060213;
		font-size: 24px;
		font-weight: 600;
		line-height: 38.4px;
		font-size: 24px;
		line-height: 38.4px;
	}
`;

const HeaderInformationWidgets = styled.div`
	display: flex;
	justify-content: space-around;
`;

const HeaderInformationSearch = styled.div`
	margin-left: 62px;
	position: relative;

	> input {
		width: 350px;
		height: 44px;
		border-radius: 8px;
		padding: 0px 0px 0px 48px;
		font-size: 16px;
		font-family: "Gelion Regular", sans-serif;
		line-height: 24px;
		outline: none;
		border: 1px solid #e1e1eb;
		font-weight: 400;
	}

	> .headerinfo__searchicon {
		color: #a3a3c2;
		z-index: 999;
		position: absolute;
		padding-left: 18px;
		margin-right: -48px;
		margin-top: 16px;
	}
`;

const HeaderInormationFilter = styled.div`
	width: 160px;
	height: 44px;
	font-family: "Gelion Regular", sans-serif;
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-left: 24px;
	border: 1px solid #e1e1eb;
	border-radius: 8px;
`;

const HeaderInformationExport = styled.div`
	background-color: #25bb87;
	border-radius: 8px;
	width: 105px;
	height: 44px;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: "Gelion Regular", sans-serif;
	font-weight: 400;

	> h3 {
		font-size: 16px;
		line-height: 24px;
		color: #fff;
	}
`;

export default HederInformation;
