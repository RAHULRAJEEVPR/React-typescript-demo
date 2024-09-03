type StatusProps={
status:"loading" | "success" |"error"
}

export default function Status({status}:StatusProps) {
    let message
    if(status==="loading"){
        message="loading.."
    }else if(status==="success"){
        message="Data fetched successfully"
    }else if(status==="error"){
        message="error fetching data"
    }
  return (
    <div>
      
    </div>
  )
}
