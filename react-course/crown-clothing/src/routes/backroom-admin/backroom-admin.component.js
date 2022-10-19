import Button from "../../components/button/button.component";
import  {LoadCategoryData, LoadCategoryManager}  from "../../utils/backroom/backroom.utils";

import './backroom-admin.styles.scss';

const BackroomAdmin = () => {
    const runDataLoad = ()=>LoadCategoryData();
    const runDataManager = ()=> LoadCategoryManager();
    return(
        <div className="grid-container">
            <h3>Load category Data</h3>
            <Button type='button' buttonType='inverted' onClick={runDataLoad}>RUN</Button>
            <h3>Progress</h3>

            <h3>Load category manager data</h3>
            <Button type='button' buttonType='inverted' onClick={runDataManager}>RUN</Button>
            <h3>Progress</h3>

        </div>
    )
}

export default BackroomAdmin;