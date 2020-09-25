import React, {Component} from "react";  
import $ from "jquery";
import { render } from "@testing-library/react";


class belanja extends Component{
     bind = (event) => {  
          this.setState({[event.target.name]: event.target.value});  
        }  
        SaveBelanja = (event) =>{  
          event.preventDefault();  
        
          let temp = this.state.belanja;   
          
          if (this.state.action === "insert") {  
            
            temp.push({  
              id: this.state.id,  
              barang: this.state.barang,  
             
            });  
          } else if (this.state.action === "update") {  
            let index = temp.findIndex(item => item.id === this.state.id);  
            
            temp[index].barang= this.state.barang;  
          
          }  
           this.setState({belanja: temp});  
         $("#modal").modal('hide');  
        }  
          
        Add = () => {  
          this.setState({  
            id : "",
            barang: "",  
            action: "insert"  
          });  
        }  
          
        Edit = (item) => {  
          this.setState({  
            id: item.id,  
            barang: item.barang,  
            action: "update"  
          });  
        }  
          
        Drop = (index) => {  
          let temp = this.state.belanja;  
          temp.splice(index,1);  
          this.setState({belanja: temp});
        }  



  constructor(){  
      super();  
      this.state = {  
        belanja: [  
          {id: "1",barang: "Tomat"},  
          {id: "2",barang: "Kangkung"},  
          {id: "3",barang: "Bawang Merah"},  
        ],  
        id: "",  
        barang: "",  
        action: "" 
    }
}
 



render(){
    return(
         <div className="container">  
                { /* generate list */ }  
               {this.state.belanja.map((item,index) => {  
                    return (  
            <div className="container">  
                    <div className="form-group" key={index}>  
                    <table class="table table-striped">
                    <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Item</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{item.id}</th>
                        <td>{item.barang}</td>
                        <td> 
                        <button type="button" class="btn btn-warning"
                        onClick={() => this.Edit(item)}  
                        data-toggle="modal" data-target="#modal2">Edit</button>                                                              
                       <button type="button" class="btn btn-danger" 
                        onClick={() => this.Drop(index)}>Hapus</button> 
                        </td>
                    </tr>
                </tbody>
                </table>
                
                </div>  
                </div>
                );  
              })} 

        <button type="button" class="btn btn-outline-secondary btn-lg"  onClick={this.Add}
         data-toggle="modal" data-target="#modal" style={{borderRadius:'20px'}}> + Tambah Data</button>


<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header bg-secondary text-white">
<h5 class="modal-title">Penambahan Item</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
      </div>
      <form onSubmit={this.SaveBelanja}>  
      <div class="modal-body">
      <label><h5>Barang apa yang ingin Anda beli?</h5></label>
      <input  type="text" name="barang" className="form-control" onChange={this.bind} value={this.state.barang}  />
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Simpan</button>
      </div>
      </form>
</div>
</div>
</div>


<div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header bg-secondary text-white">
<h5 class="modal-title">Edit Item</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <form onSubmit={this.SaveBelanja}>  
    <div class="modal-body">
    <label><h5>Barang apa yang ingin Anda beli?</h5></label>
    <input  type="text" name="barang" className="form-control" onChange={this.bind} value={this.state.barang}  />
    </div>
    <div class="modal-footer">
    <button type="submit" class="btn btn-primary">Simpan</button>
      </div>
      </form>
</div>
</div>
</div>


    </div>
    )
}


}

export default belanja;

