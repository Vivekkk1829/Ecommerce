import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle,CardContent } from "../ui/card";
import { Table,TableHead, TableHeader, TableRow,TableBody, TableCell } from "../ui/table";

function ShoppingOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table> 
            <TableHeader className="bg-gray-100">
                <TableRow>
                    <TableHead>Order Id</TableHead>
                    <TableHead>Order Date</TableHead>
                    <TableHead>Order Status</TableHead>
                    <TableHead>Order Price</TableHead>
                    <TableHead className="sr-only">Details</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>123456</TableCell>
                    <TableCell>27/06/2005</TableCell>
                    <TableCell>In Process</TableCell>
                    <TableCell>$1000</TableCell>
                    <TableCell>
                        <Button className='bg-black text-white'>View Details</Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default ShoppingOrders;
