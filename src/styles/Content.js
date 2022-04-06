import styled from "styled-components";

// Styles
export const ContentsContainer = styled.div`
	flex: 0.7;
	flex-grow: 1;
	max-width: 1178px;
	overflow-y: scroll;
`;

// Header
export const HeaderContainer = styled.div`
	height: 78px;
	width: 100%;
	display: flex;
	position: sticky;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #ecebf5;
`;

export const HeaderSearch = styled.div`
	> input {
		font-size: 16px;
		line-height: 26px;
		font-family: "Gelion Regular", sans-serif;
		height: 54px;
		color: #a3a3c2;
		padding-left: 16px;
		width: 441px;
		margin-left: 40px;
		outline: none;
		border: none;
		border-radius: 10px;
		background-color: #fafafc;
	}

	> .header__searchicon {
		color: #a3a3c2;
		margin-left: -40px;
		z-index: 999;
	}
`;

export const HeaderIcons = styled.div`
	display: flex;
	align-items: center;
	margin-right: 40px;
	border: 1px solid #ecebf5;
	border-radius: 10px;
`;

export const HeaderNotification = styled.div`
	height: 24px;
	display: flex;
	align-items: center;
	border-right: 1px solid #ecebf5;
	padding: 10px 24px 10px 14px;

	> .header__bell {
		color: #92929d;
		padding-right: 2px;
	}

	> .header__three {
		color: #fff;
		width: 8px;
		height: 10px;
		border-radius: 4px;
		background-color: #f25a68;
		padding: 2px;
	}
`;

export const HeaderProfile = styled.div`
	display: flex;
	align-items: center;
	padding: 10px 8px 10px 24px;

	> .header__circle {
		width: 32px;
		height: 32px;
		color: #6837ef;
		padding-right: 2px;
	}
`;

// Header Navbar
export const HeaderNavbarContainer = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid #ecebf5;
	font-family: "Gelion Regular", sans-serif;
`;

export const HeaderNavbarLinks = styled.div`
	display: flex;
	justify-content: space-between;
	margin-left: 40px;

	> .active {
		color: #060213;
		font-weight: 900;
		border-bottom: 2px solid #6837ef;
	}

	> h3 {
		margin-right: 40px;
		font-size: 16px;
		text-align: left;
		color: #696d8c;
		font-weight: 400;
		padding-top: 18px;
		padding-bottom: 18px;
		cursor: pointer;
	}
`;

// Header Information
export const HeaderInformationContainer = styled.div`
	max-width: 928px;
	margin: 0 auto;
	padding: 31px 0px;

	@media (min-width: 1300px) {
		max-width: 1024px;
	}
`;

export const HeaderInformationContents = styled.div`
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

export const HeaderInformationText = styled.div`
	font-family: "Gelion Semi Bold", sans-serif;

	> h1 {
		color: #060213;
		font-size: 24px;
		font-size: 24px;
		font-weight: 600;
		line-height: 38.4px;
		line-height: 38.4px;
	}

	@media (min-width: 1281px) {
		h1 {
			font-size: 22px;
			line-height: 20px;
			margin-left: 0px;
		}
	}
`;

export const HeaderInformationWidgets = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const HeaderInformationSearch = styled.div`
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

	@media (min-width: 1024px) and (max-width: 1280px) {
		input {
			width: 200px;
			font-size: 14px;
		}
	}
`;

export const HeaderInormationFilter = styled.div`
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

	@media (max-width: 1024px) {
		width: 120px;
		font-size: 12px;
	}
`;

export const HeaderInformationExport = styled.div`
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

	@media (max-width: 1024px) {
		width: 90px;
		font-size: 12px;
		margin-right: 40px;
	}
`;

// Graph
export const GraphContainer = styled.div`
	max-width: 1024px;
	margin: 0 auto;

	@media (max-width: 1024px) {
		margin: 0px 40px 0px 40px;
	}
`;

// Graph Component
export const SingleGraphContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 24px;
	border-radius: 8px;
	border: 1px solid #ecebf5;

	@media (min-width: 1024px) and (max-width: 1280px) {
		margin: 0px 40px 24px 40px;
	}
`;

export const GraphResult = styled.div`
	flex: 0.7;
	padding: 0px 24px;
	border-right: 1px solid #ecebf5;
`;

export const GraphDetials = styled.div`
	flex: 0.3;
`;

export const GraphResultHeading = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 15px;
	padding-bottom: 5px;
`;

export const GraphResultHeadingText = styled.div`
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

export const GraphResultHeadingSpec = styled.div`
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
		border-radius: 2px;
	}

	> hr {
		width: 24px;
		transform: rotateZ(90deg);
		border: 1px solid #e1e1eb;
	}
`;

export const GraphMonth = styled.div`
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

export const Wrapper = styled.div`
	padding-top: 32px;
	padding-bottom: 32px;
`;

export const AverageTime = styled.div`
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

export const ResponseTime = styled.div`
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

// Grph Diagram
export const GraphDiagramContaier = styled.div`
	padding-bottom: 12px;
`;

export const Chart = styled.div`
	height: 220px;

	@media (min-width: 1024px) and (max-width: 1280px) {
		width: 600px;
	}
`;
