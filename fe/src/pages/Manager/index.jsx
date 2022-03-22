import React, { useState, useEffect } from "react";

// material
import {
  Card,
  Table,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Box,
  Tabs,
  Tab,
  AppBar,
} from "@mui/material";
// components
import { SearchNotFound, Scrollbar } from "@components";

import {
  TableListHead,
  TableListToolbar,
  TableListBody,
  TableDialog,
} from "./components";

import AddIcon from "@mui/icons-material/Add";

import { CustomerService, ProductService, TransactionService } from "@services";

import { COMMON, CONSTANT } from "@utils";

// ----------------------------------------------------------------------

export default function User() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedTransactions, setSelectedTransactions] = useState([]);
  const [orderBy, setOrderBy] = useState("id");
  const [filterNameOfCustomer, setFilterNameOfCustomer] = useState("");
  const [filterNameOfProduct, setFilterNameOfProduct] = useState("");
  const [filterNameOfTransaction, setFilterNameOfTransaction] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [customers, setCustomers] = useState(null);
  const [products, setProducts] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [tab, setTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const getCustomers = async () => {
    const res = await CustomerService.GET_ALL_CUSTOMERS();
    if (res.result) {
      setCustomers(res.data);
    }
  };

  const getProducts = async () => {
    const params = {
      limit: 999,
      skip: 1,
    };
    const res = await ProductService.GET_ALL_PRODUCTS(params);
    if (res.result) {
      setProducts(res.data);
    }
  };

  const getTransactions = async () => {
    const res = await TransactionService.GET_ALL_TRANSACTIONS();
    if (res.result) {
      setTransactions(res.data);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getTransactions();
  }, []);

  const getHeaderText = (tab) => {
    switch (tab) {
      case 0:
        return "khách hàng";
      case 1:
        return "sản phẩm";
      case 2:
        return "đơn hàng";
    }
  };

  const getTableHead = (tab) => {
    switch (tab) {
      case 0:
        return CONSTANT.TABLE_HEAD_CUSTOMER;

      case 1:
        return CONSTANT.TABLE_HEAD_PRODUCT;

      case 2:
        return CONSTANT.TABLE_HEAD_TRANSACTION;
    }
  };

  const getRowCount = (tab) => {
    switch (tab) {
      case 0:
        return customers && customers.length;
      case 1:
        return products && products.length;
      case 2:
        return transactions && transactions.length;
    }
  };

  const getNumSelected = (tab) => {
    switch (tab) {
      case 0:
        return selectedCustomers && selectedCustomers.length;
      case 1:
        return selectedProducts && selectedProducts.length;
      case 2:
        return selectedTransactions && selectedTransactions.length;
    }
  };

  const getType = (tab) => {
    switch (tab) {
      case 0:
        return "customer";
      case 1:
        return "product";
      case 2:
        return "transaction";
    }
  };

  const getFilterName = (tab) => {
    switch (tab) {
      case 0:
        return filterNameOfCustomer;
      case 1:
        return filterNameOfProduct;
      case 2:
        return filterNameOfTransaction;
    }
  };

  const handleChangeCurrentTab = (event, newTab) => {
    setTab(newTab);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAll = (event, tab) => {
    let newSelecteds = [];
    if (event.target.checked) {
      switch (tab) {
        case 0:
          newSelecteds = customers.map((n) => n.id);
          setSelectedCustomers(newSelecteds);
          break;
        case 1:
          newSelecteds = products.map((n) => n.id);
          setSelectedProducts(newSelecteds);
          break;
        case 2:
          newSelecteds = transactions.map((n) => n.id);
          setSelectedTransactions(newSelecteds);
          break;
      }
      return;
    }
    switch (tab) {
      case 0:
        setSelectedCustomers([]);
        break;
      case 1:
        setSelectedProducts([]);
        break;
      case 2:
        setSelectedTransactions([]);
        break;
    }
  };

  const handleRefresh = (tab) => {
    switch (tab) {
      case 0:
        getCustomers();
        break;
      case 1:
        getProducts();
        break;
      case 2:
        getTransactions();
        break;
    }
  };

  const handleSelect = (event, id, selectedArray, tab) => {
    const selectedIndex = selectedArray.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedArray, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedArray.slice(1));
    } else if (selectedIndex === selectedArray.length - 1) {
      newSelected = newSelected.concat(selectedArray.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedArray.slice(0, selectedIndex),
        selectedArray.slice(selectedIndex + 1)
      );
    }
    switch (tab) {
      case 0:
        setSelectedCustomers(newSelected);
        break;
      case 1:
        setSelectedProducts(newSelected);
        break;
      case 2:
        setSelectedTransactions(newSelected);
        break;
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event, tab) => {
    switch (tab) {
      case 0:
        setFilterNameOfCustomer(event.target.value);
        break;
      case 1:
        setFilterNameOfProduct(event.target.value);
        break;
      case 2:
        setFilterNameOfTransaction(event.target.value);
        break;
    }
  };

  const emptyRowCustomers =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - customers.length) : 0;

  const emptyRowProducts =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

  const emptyRowTransactions =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - transactions.length) : 0;

  const filteredCustomers = COMMON.applySortFilter(
    customers,
    COMMON.getComparator(order, orderBy),
    filterNameOfCustomer
  );

  const filteredProducts = COMMON.applySortFilter(
    products,
    COMMON.getComparator(order, orderBy),
    filterNameOfProduct
  );

  const filteredTransactions = COMMON.applySortFilter(
    transactions,
    COMMON.getComparator(order, orderBy),
    filterNameOfTransaction
  );

  const isUserNotFound = filteredCustomers && filteredCustomers.length === 0;
  const isProductNotFound = filteredProducts && filteredProducts.length === 0;
  const isTransactionNotFound =
    filteredTransactions && filteredTransactions.length === 0;

  return (
    <Container>
      <Stack direction="column" spacing={2}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
            <Tabs value={tab} onChange={handleChangeCurrentTab} centered>
              <Tab label="Khách hàng" {...COMMON.a11yProps("table", 0)} />
              <Tab label="Sản phẩm" {...COMMON.a11yProps("table", 1)} />
              <Tab label="Đơn hàng" {...COMMON.a11yProps("table", 2)} />
            </Tabs>
          </AppBar>
        </Box>
        {tab !== 0 && tab !== 2 && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h4" gutterBottom>
              {getHeaderText(tab)[0].toUpperCase() +
                getHeaderText(tab).slice(1)}
            </Typography>
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              sx={{ textTransform: "none" }}
              onClick={() => setOpenDialog(true)}
            >
              Tạo {getHeaderText(tab).toLowerCase()} mới
            </Button>
          </Stack>
        )}
        <Card>
          <TableListToolbar
            numSelected={getNumSelected(tab)}
            filterName={getFilterName(tab)}
            onFilterName={(e) => handleFilterByName(e, tab)}
            searchPlaceholder={getHeaderText(tab)}
            handleRefresh={() => handleRefresh(tab)}
          />

          <Scrollbar style={{ maxHeight: 512 }}>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TableListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={getTableHead(tab)}
                  rowCount={getRowCount(tab)}
                  numSelected={getNumSelected(tab)}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAll}
                  tab={tab}
                />
                <TableListBody
                  filteredCustomers={filteredCustomers}
                  emptyRowCustomers={emptyRowCustomers}
                  filteredProducts={filteredProducts}
                  emptyRowProducts={emptyRowProducts}
                  filteredTransactions={filteredTransactions}
                  emptyRowTransactions={emptyRowTransactions}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  handleSelect={handleSelect}
                  tab={tab}
                  selectedCustomers={selectedCustomers}
                  selectedProducts={selectedProducts}
                  selectedTransactions={selectedTransactions}
                  setOpenDialog={setOpenDialog}
                />
                {tab === 0 && isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={12} sx={{ py: 2 }}>
                        <SearchNotFound searchQuery={filterNameOfCustomer} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}

                {tab === 1 && isProductNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={12} sx={{ py: 2 }}>
                        <SearchNotFound searchQuery={filterNameOfProduct} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}

                {tab === 2 && isTransactionNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={12} sx={{ py: 2 }}>
                        <SearchNotFound searchQuery={filterNameOfTransaction} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={getRowCount(tab)}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={`Số ${getHeaderText(tab)} mỗi trang`}
          />
        </Card>

        <TableDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          type={getType(tab)}
          action="add"
        />
      </Stack>
    </Container>
  );
}
