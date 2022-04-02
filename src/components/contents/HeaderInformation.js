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
					<HeaderInformationExport>
						<h3>Export</h3>
					</HeaderInformationExport>
				</HeaderInformationWidgets>
			</HeaderInformationContents>
		</HeaderInformationContainer>
	);
};

const HeaderInformationContainer = styled.div`
	display: flex;
	align-items: center;
	height: 110px;
	font-family: "Gelion Semi Bold", sans-serif;
	background-color: red;
`;

const HeaderInformationContents = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HeaderInformationText = styled.div`
	margin-left: 40px;

	> h1 {
		color: #060213;
		font-size: 24px;
		font-weight: 600;
		line-height: 38.4px;
	}
`;

const HeaderInformationWidgets = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-left: 124px;
`;

const HeaderInformationSearch = styled.div`
	> input {
		width: 300px;
		height: 44px;
		border-radius: 8px;
		border: 1px solid #e1e1eb;
		outline: none;
		background-color: #e1e1eb;
		font-size: 16px;
		line-height: 24px;
		color: #a3a3c2;
		font-family: "Gelion Regular", sans-serif;
		font-weight: 400;
		padding-left: 48px;
		margin-right: 24px;
	}

	> .headerinfo__searchicon {
		color: #a3a3c2;
	}
`;

const HeaderInormationFilter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 160px;
	height: 44px;
	border-radius: 8px;
	border: 1px solid #e1e1eb;
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	color: #060213;
	font-family: "Gelion Regular", sans-serif;
	margin-right: 32px;
`;

const HeaderInformationExport = styled.div`
	background-color: #25bb87;
	width: 105px;
	height: 44px;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	font-family: "Gelion Regular", sans-serif;
`;

export default HederInformation;
