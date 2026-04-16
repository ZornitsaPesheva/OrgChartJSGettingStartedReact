import {OrgChart, Employee} from "balkan-orgchart-react";

function App() {
  return (
    <>
     <OrgChart nodeBinding={{ field_0: 'name', field_1: 'title' }} >
      <Employee name='Denny Curtis' title='CEO'>
        <Employee name='Lexie Cole' title='QA Lead'></Employee>
        <Employee name='Janae Barrett' title='Technical Director'></Employee>
        <Employee name='Aaliyah Webb' title='Assistant' assistant={true}></Employee>
      </Employee>
     </OrgChart>
    </>
  )
}

export default App