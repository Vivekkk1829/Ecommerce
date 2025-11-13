import { Button } from "../ui/button"
import { Card, CardContent, CardFooter } from "../ui/card"
import { Label } from "../ui/label"

function AddressCard({addresInfo,handleDeleteAddress,handleEditAddress,setCurrentSelectedAddress}){
  return (
    <Card onClick={setCurrentSelectedAddress? ()=>setCurrentSelectedAddress(addresInfo) :null}>
        <CardContent className="grid gap-4">
            <Label>Address :{addresInfo?.address}</Label>
            <Label>City :{addresInfo?.city}</Label>
            <Label>Pincode :{addresInfo?.pincode}</Label>
            <Label>Phone :{addresInfo?.phone}</Label>
            <Label>Notes :{addresInfo?.notes}</Label>
        </CardContent>
        <CardFooter className="flex justify-between p-3">
            <Button className="bg-black text-white" onClick={()=>handleEditAddress(addresInfo)}>Edit</Button>
            <Button className="bg-black text-white" onClick={()=>handleDeleteAddress(addresInfo)}>Delete</Button>
        </CardFooter>
    </Card>
  )
}

export default AddressCard