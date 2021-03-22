import React from "react";
import DataTable from 'react-data-table-component';
import { Grid, Popup, Divider } from 'semantic-ui-react'
import { MdMonetizationOn } from 'react-icons/md';

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

            if(res.data[i].kgQuantity == 0){
              console.log("Em falta no estoque!", res.data[i].productName);
            } else {
              stockData.push({'actions': <Popup content={'Vender '+ res.data[i].productName } trigger={<button style={{border: 'none', background:'none'}}><MdMonetizationOn onClick={console.log("teste")} style={{width:'145%', height:'145%', color:'green', cursor:"pointer"}}/></button>} />,
            'cod': a, 'product': b, 'quantity': c, 'purchasePrice': d, 'resalePrice': e});
            }
 
            cont = i;
          }
          this.setState({ noData: false });
        }).catch((err) => {
          this.setState({ noData: true });
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
    return (
      <div style={{margin:'1.5%'}}>
        {this.state.noData ? (
          <div>
            <Grid columns={1}>
              <Grid.Row>
                <Grid.Column>
                  <br/><br/><div class="ui active centered inline loader"/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          ) : (
          <div style={{marginLeft:'23%', width:'60%'}}>
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
              paginationComponentOptions={{rowsPerPageText: 'Produtos por página:', rangeSeparatorText: 'de', selectAllRowsItem: true, selectAllRowsItemText: 'Todas'}}
              noDataComponent={<i style={{fontSize:"12px", marginLeft:'-10%'}}><div class="ui divider"/>Não existem produtos disponíveis para venda, compre em "Compras".</i>}
            />
          </div>
      )}
      </div>
    )
  }
}

export default Table;