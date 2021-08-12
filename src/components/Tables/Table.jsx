import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import InputBase from '@material-ui/core/InputBase';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { updateAmountProductsActionCreator } from '../../redux/Reducer/products-reducer';
import { useDispatch, useSelector } from 'react-redux';
import Outcome from '../Outcome/Outcome';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


export default function CustomizedTables(props) {
  const dispatch = useDispatch()
  const products = useSelector(state => state.tablesPage.product);
  const outcomeIdProducts = Object.keys(products);


  const classes = useStyles()
  const rows = props.products.map(item => createData(item.gid, item.gname, item.gprice, 0, 0));

  const handleChange = (event) => {
    const amount = Number(event.target.value);
    if (isNaN(amount)) {
      dispatch(updateAmountProductsActionCreator(0));
    } else {
      const idProduct = event.target.name;
      const product = props.products.filter(item => item.gid === idProduct);
      const price = Number(product[0].gprice) * amount;
      dispatch(updateAmountProductsActionCreator(amount, idProduct, price));
    }

  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Називанние товара</StyledTableCell>
              <StyledTableCell align="right">Цена</StyledTableCell>
              <StyledTableCell align="right">Количество (input)</StyledTableCell>
              <StyledTableCell align="right">Сумма</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat} руб</StyledTableCell>
                <StyledTableCell align="right">
                  <InputBase type="number" onChange={handleChange} name={row.name} />
                </StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Outcome />
    </div>
  );
}