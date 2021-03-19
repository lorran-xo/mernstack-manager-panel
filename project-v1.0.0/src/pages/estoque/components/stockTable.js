import React from "react";
import "./stockTable.css"
import DataTable from 'react-data-table-component';

class Table extends React.Component {

  state = { 
    loadingTable: false,
    counting: 1,
    data: "Carregando..."
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    this.setState({ loadingTable: true });
    this.loadTable().then(res => {
      this.setState({ data: res.data, count: res.total, isLoading: false,});
    });
  }

  loadTable = () => {
    return new Promise(async (use) => {
      var cont = 0;
      const stockData = [];
      var a = 0, b = 0, c = 0, d = 0, e = 0;

      fetch('http://localhost:9000/listStock').then(res => res.json().then(data =>({data: data}))
        .then((res) => {
          console.log(res.data);
          for (let i = 0; i < res.data.length; i += 1) {
            // Puxar valores do Axios para as variáveis
            a = res.data[i].barCode;
            b = res.data[i].productName;
            c = res.data[i].kgQuantity;
            d = res.data[i].kgPurchasePrice;
            e = res.data[i].kgResalePrice;

            stockData.push({'cod': a, 'product': b, 'quantity': c, 'purchasePrice': d, 'resalePrice': e/*, 'actions':<EditVirtualNumber refreshTable={this.handleRefreshTable} number={res.data[i].number} />*/});
            cont = i;
          }
        }).catch((err) => {
          console.log("catch");
        }));

      const data = stockData;
      
      setTimeout(() => {
        use({
          data, cont
        });
      }, 0);
    });
  }

  render() {
    const customStyles = {
      rows: {
        style: {
          minHeight: '72px', // override the row height
        }
      },
      headCells: {
        style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
        },
      },
      cells: {
        style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
        },
      },
    };
    
    const columns = [
      {
        selector: "actions",
        name: "Ação",
      },
      {
        selector: "cod",
        name: "Código de Barras",
        sortable: true,
      },
      {
        selector: "product",
        name: "Produto",
        sortable: true,
      },
      {
        selector: "quantity",
        name: "Quantidade Disponível(kg total)",
        sortable: true,
      },
      {
        selector: "purchasePrice",
        name: "Preço de Compra (o kg)",
        sortable: true,
      },
      {
        selector: "resalePrice",
        name: "Preço de revenda (o kg)",
        sortable: true,
      },
    ];

    /*const data = [
      {
        cod: "valor 1",
        product: "dfgdg",
        quantity: "jfdhlskgj",
        purchasePrice: "gsduifg",
        resalePrice: "hjushrf",
      },
      {
        cod: "valor 2",
        product: "123",
        quantity: "455241",
        purchasePrice: "64431",
        resalePrice: "123123",
      },
    ];*/
  
    const { data, isLoading } = this.state;

    return (
      <div style={{margin:'1.5%'}}>
        <DataTable
          title="Estoque"
          data={data}
          columns={columns}
          customStyles={customStyles}
        />
      </div>
    )
  }
}

export default Table;