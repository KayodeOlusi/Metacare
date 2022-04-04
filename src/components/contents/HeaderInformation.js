import styled from "styled-components";
// Icons
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

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
		font-size: 24px;
		font-weight: 600;
		line-height: 38.4px;
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
		outline: none;
		width: 350px;
		height: 44px;
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		border-radius: 8px;
		padding: 0px 0px 0px 48px;
		font-family: "Gelion Regular", sans-serif;
		border: 1px solid #e1e1eb;
	}

	> .headerinfo__searchicon {
		z-index: 999;
		color: #a3a3c2;
		margin-top: 16px;
		position: absolute;
		padding-left: 18px;
		margin-right: -48px;
	}
`;

const HeaderInormationFilter = styled.div`
	width: 160px;
	height: 44px;
	display: flex;
	font-size: 16px;
	line-height: 24px;
	border-radius: 8px;
	font-weight: 400;
	margin-left: 24px;
	align-items: center;
	justify-content: space-around;
	border: 1px solid #e1e1eb;
	font-family: "Gelion Regular", sans-serif;
`;

const HeaderInformationExport = styled.div`
	width: 105px;
	height: 44px;
	display: flex;
	font-size: 16px;
	font-weight: 400;
	font-weight: 400;
	line-height: 24px;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
	background-color: #25bb87;
	font-family: "Gelion Regular", sans-serif;

	> h3 {
		color: #fff;
		font-size: 16px;
		line-height: 24px;
	}
`;

export default HederInformation;
