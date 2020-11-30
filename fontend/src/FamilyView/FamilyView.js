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
        <div style={{color: 'green'}} >
            Welcome to Gift Exchange
            {
                familyMembers.map((member, index) => {
                    return <FamilyMember member={member} key={index} setSelectedFamilyMemberFunction={setSelectedFamilyMemberFunction} />
                })
            }
        </div>
    </div>
  }

  function FamilyMember(props){
    const familyMember = props.member
    const setSelectedFamilyMemberFunction = props.setSelectedFamilyMemberFunction
    function selectFamilyMember(){
        setSelectedFamilyMemberFunction(familyMember)
    }

    return <div style={{margin: 20}} onClick={selectFamilyMember}>
        {familyMember.name}
    </div>
  }