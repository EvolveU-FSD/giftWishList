import './App.css';
import FamilyView from './FamilyView/FamilyView'
import {useState} from 'react'
import WishListView from './WishlistView/WishListView'

function App() {
  const [selectedFamilyMember, setSelectedFamilyMemberFunction] = useState(null)

  function Navigator(){
    if (selectedFamilyMember == null)
    {
      return <FamilyView setSelectedFamilyMemberFunction={setSelectedFamilyMemberFunction}/>
    } else{
      return <WishListView familyMember = {selectedFamilyMember} />
    }
  }

  return (
    <Navigator />
  );
}

export default App;
