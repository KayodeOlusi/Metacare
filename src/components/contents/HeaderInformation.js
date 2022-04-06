// Icons
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
// Styles
import {
	HeaderInformationContainer,
	HeaderInformationContents,
	HeaderInformationExport,
	HeaderInformationSearch,
	HeaderInformationText,
	HeaderInformationWidgets,
	HeaderInormationFilter,
} from "../../styles/Content";

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

export default HederInformation;
