import { Container } from './order.styles';
import { Table, Tr } from 'styled-table-component';

export const OrderList = ({ products }) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Status</th>
          </tr>

          {products?.map((p) => (
            <Tr light key={p._id}>
              <td>{p._id}</td>
              <td>{p.status}</td>
            </Tr>
          ))}
        </thead>
      </Table>
    </Container>
  );
};
