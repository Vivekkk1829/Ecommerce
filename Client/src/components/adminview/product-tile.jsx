import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelte
}) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative w-full h-[300px] bg-gray-100 flex items-center justify-center">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-full object-contain rounded-t-lg"
          />
        </div>

        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">{product.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product.salePrice > 0 ? "line-through" : ""
              }text-lg font-semibold text-primary`}
            >
              ${product?.price}
            </span>
            <span className="text-lg font-bold">${product?.salePrice}</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
            className="bg-black text-white"
          >
            Edit
          </Button>
          <Button onClick={()=>{handleDelte(product?._id)}} className="bg-black text-white">Delete</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default AdminProductTile;
