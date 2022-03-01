
import './App.css';

function App() {
  return (
    <div>
    



<div className="container-fluid">
  <div className="row">
    
    <div className="col-md-12">
    <div className="panel panel-default">
        <div className="panel-header">
         <h4 className=""> Latest News : - </h4>
        </div>
      </div>
    </div>

  </div>
</div>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-3">
    <div className="panel panel-warning">
      <div className="panel-heading">See Latest Notifications</div>
      <div className="panel-body">Nothing to show.</div>
    </div>
    </div>
    <div className=" col-md-6">
    <div className="panel panel-primary">
      <div className="panel-heading">Upcomming Examination / Download Admit Card</div>
      <div className="panel-body">
      <ul class="nav nav-tabs">
  <li class="active"><a data-toggle="tab" href="#home">Application Link</a></li>
  <li><a data-toggle="tab" href="#menu1">Download Admit Card</a></li>
  
</ul>

<div class="tab-content">
  <div id="home" class="tab-pane fade in active">
    <h3>Upcomming Examination</h3>
    <p></p>
  </div>
  <div id="menu1" class="tab-pane fade">
    <h3>Download Admit Card</h3>
    <p></p>
  </div>
 
</div>
      </div>
    </div>
    </div>
    <div className="col-md-3">
    <div className="panel panel-danger">
      <div className="panel-heading">Results</div>
      <div className="panel-body">Nothing to show</div>
    </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default App;
