import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import accImg from "../../assets/account.jpg";
import { TabsContent } from "@radix-ui/react-tabs";
import Address from "@/components/shoppingview/address";
import ShoppingOrders from "@/components/shoppingview/orders";
function ShoppingAccount() {
  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          // width={'1600'}
          // height={'300'}
          // style={{aspectRatio:'1600/300',objectFit:"cover"}}
          src={accImg}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="container  mx-auto grid grid-cols-1 gap-8 py-8 px-4">
        <div className="flex flex-col rounded-lg   bg-background p-6 shadow-sm">
          <Tabs defaultValue="orders" >
            <TabsList>
              <TabsTrigger value="orders" >Orders</TabsTrigger>
              <TabsTrigger value="address">Address</TabsTrigger>
            </TabsList>
            <TabsContent value="orders">
               <ShoppingOrders/>
            </TabsContent>
            <TabsContent value="address">
                <Address/>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ShoppingAccount;
