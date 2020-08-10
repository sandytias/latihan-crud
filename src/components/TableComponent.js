import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col } from 'reactstrap';
import {Link } from 'react-router-dom';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

const { SearchBar } = Search;


const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true,
  headerStyle: () => {
      return {width: '5%'};
  },
}, 
{
  dataField: 'nama',
  text: 'Name',
  sort: true
}, 
{
  dataField: 'alamat',
  text: 'Alamat',
  sort: true
},
{
    dataField: 'link',
    text: 'Action',
    formatter: (rowContent, row) => {
        return (
            <div>
                <Link to={"detail/"+row.id}>
                    <button color="dark" className="mr-2">
                        Detail
                    </button>
                </Link>
                
                <Link to={"edit/"+row.id}>
                    <button color="dark" className="mr-2">
                        Edit
                    </button>
                </Link>
                <button color="dark" className="mr-2">
                    Delete
                </button>
            </div>
        )
    }
}
];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
  }];



const TableComponent = (props) => {
    return (
        <Container>
            <ToolkitProvider 
                bootstrap4 
                keyField='id' 
                data={ props.users } 
                columns={ columns } 
                defaultSorted={ defaultSorted }
                 
                search
                >
                {(props) => (
                    <div>
                        <Row>
                            <Col>
                            <Link to="/create">
                                <button color="dark" className="mr-2">
                                    Create User
                                </button>
                            </Link>
                            </Col>
                            <Col>
                            <div className="float-right">
                                <SearchBar { ...props.searchProps } placeholder="Search ..."/>
                            </div>
                            </Col>
                        </Row>
                      
                        
                        <BootstrapTable { ...props.baseProps } pagination={ paginationFactory() } />
                    </div>
                    )}
                </ToolkitProvider>
        </Container>
    )
}

export default TableComponent
