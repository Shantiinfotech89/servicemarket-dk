import { SIDEBAR_TYPE } from '../Helpers/Enums';


// sidevbar Imports
import AddEmployee from './AddEmployee/AddEmployee';


function AllSideBar(props) {

  function renderSideBarStyle() {
    switch (props.style) {
      case SIDEBAR_TYPE.ADD_EMPLOYEE:
        return(
          <AddEmployee
            closeSideBar={() => props.closeSideBar()}
            sidebarIsOpen={props.sidebarOpen}
          />
        );
      }
    }

    return (
      <>
        { (props.sidebarIsOpen) ?
          <div className="sideBarParent">
              { renderSideBarStyle() }
            </div>
          :
          null
        }
      </>
    )
  }

  export default AllSideBar
