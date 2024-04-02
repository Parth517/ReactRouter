import { useLoaderData } from 'react-router-dom';
function Github() {

    // const [data,setData]=React.useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Parth517')
    //     .then((response)=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    const data=useLoaderData()
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        GitHub Repos: {data.public_repos}
        <img src={data.avatar_url} width={180} alt="" />
    </div>
  )
}

export default Github


//methid used to bring or fetch from data from server when mouse is hovered over its link
//done so that data can already be loaded before user clicks on the link
export const githubInfoLoader=async()=>{
    const response=await fetch("https://api.github.com/users/Parth517")
    return response.json()
}