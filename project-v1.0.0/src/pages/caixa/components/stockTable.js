import React from "react";
import DataTable from 'react-data-table-component';
import { Grid, Button, Popup } from 'semantic-ui-react'
import { GiMoneyStack } from 'react-icons/gi';

class Table extends React.Component {

  state = { 
    loadingTable: false,
    counting: 1,
    data: "Carregando...",
    noData: true,
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
            a = res.data[i].barCode;
            b = res.data[i].productName;
            c = res.data[i].kgQuantity + 'kg';
            d = 'R$ '+res.data[i].kgPurchasePrice+' /kg';
            e = 'R$ '+res.data[i].kgResalePrice+' /kg';

            stockData.push({'actions': <Popup content='Vender desse produto' trigger={<Button><GiMoneyStack style={{width:'150%', height:'150%', color:'green', cursor:"pointer"}}/></Button>} />,
            'cod': a, 'product': b, 'quantity': c, 'purchasePrice': d, 'resalePrice': e});
            
            
            cont = i;
          }
          this.setState({ noData: false });
        }).catch((err) => {
          console.log("catch");
          this.setState({ noData: true });
        }));

      const data = stockData;
      
      setTimeout(() => {
        use({
          data, cont
        });
      }, 0);
    });

    console.log(this.state.data);

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
        sortable: true,
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
        name: "Quantidade disponível",
        sortable: true,
      },
      {
        selector: "purchasePrice",
        name: "Preço de Compra",
        sortable: true,
      },
      {
        selector: "resalePrice",
        name: "Preço de revenda",
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
    ];
        toDo: ver se os outros Grids tambem estao assim: 
            <Grid columns={9}>
              <Grid.Row>
                <Grid.Column>
                  <div class="ui active centered inline loader"/>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  Carregando produtos...
                </Grid.Column>
              </Grid.Row>
            </Grid>
    */

    const { data, isLoading } = this.state;
    console.log(this.state.noData);
    return (
      <div style={{margin:'1.5%'}}>
        {this.state.noData ? (
          <div>
            <Grid columns={1}>
              <Grid.Row>
                <Grid.Column>
                  <div class="ui active centered inline loader"><br/><br/>Carregando...</div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          ) : (
          <DataTable
            data={data}
            columns={columns}
            customStyles={customStyles}
            pagination
            highlightOnHover
            resposive
            fixedHeader
            fixedHeaderScrollHeight='250px'
            paginationPerPage='7'
            paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            paginationComponentOptions={{rowsPerPageText: 'Linhas por página:', rangeSeparatorText: 'de', selectAllRowsItem: true, selectAllRowsItemText: 'Todas'}}

          />
      )}
      </div>
    )
  }
}

export default Table;