import {useEffect, useState} from 'react'

export default function FamilyView({setSelectedFamilyMemberFunction}){
    const [familyMembers, setFamilyMembersFunction] = useState([])
    useEffect(function(){
        fetch('http://localhost:8081/family')
        .then(res => {
            return res.json()
        })
        .then(family => {
            setFamilyMembersFunction(family)
        })
    }, [])

    return <div className="App">
        <div style={{color: 'white', fontSize: 24, fontWeight: 'bold', padding: 20, backgroundColor: 'darkgreen'}} >
            Welcome to Gift Exchange
        </div>
        <div style={{backgroundColor: 'green', height: '100vh', display: 'flex', justifyContent: 'center'}}>
            <div style={{width: 500, backgroundColor: 'white'}}>
            {
                familyMembers.map((member, index) => {
                    return <FamilyMember member={member} key={index} setSelectedFamilyMemberFunction={setSelectedFamilyMemberFunction} />
                })
            }
            </div>
        </div>
    </div>
  }

  function FamilyMember(props){
    const familyMember = props.member
    const setSelectedFamilyMemberFunction = props.setSelectedFamilyMemberFunction
    function selectFamilyMember(){
        setSelectedFamilyMemberFunction(familyMember)
    }

    return <div style={{margin: 20, fontSize: 20, color: 'darkgreen', fontWeight: 'bold'}} onClick={selectFamilyMember}>
        {familyMember.name}
    </div>
  }