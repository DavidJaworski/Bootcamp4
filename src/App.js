import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    };
  }

  onChange = (data) => {
    this.setState({data})
    console.log(this.state.data)
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <AddBuilding
            data={this.props.data}
            onChange = {this.onChange}
          />
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}

                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data={this.props.data}
                selectedBuilding={this.state.selectedBuilding}
              />
            </div>
            <div>
              <RemoveBuilding
                data={this.props.data}
                selectedBuilding={this.state.selectedBuilding}
                onChange = {this.onChange}
                />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
