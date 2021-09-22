import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class NewAssignment extends Component {
      constructor(props) {
      super(props);
      this.state = {open: true, name : '', due_date : '', course_id: '' }
    }
    
    handleClickOpen = () => {
      this.setState( {open:true} );
    };

    handleClose = () => {
      this.setState( {open:false} );
    };

    
    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
    }

  // Save assignment info and close modal form
    handleAdd = () => {
       this.props.newAssignment(this.state.name, this.state.due_date, this.state.course_id);
       this.handleClose();
    }

    render()  { 
      return (
          <div>
            <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
              New Assignment
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>New Assignment</DialogTitle>
                <DialogContent>
                
                  <TextField autoFocus fullWidth label="Assignment Name" name="name" onChange={this.handleChange} value={this.state.name}/> 
                  <TextField autoFocus fullWidth label="Due Date" name="due_date" onChange={this.handleChange} value={this.state.due_date}/> 
				  <TextField autoFocus fullWidth label="Course ID" name="course_id" onChange={this.handleChange} value={this.state.course_id}/> 
                </DialogContent>
                <DialogActions>
                  <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                  <Button color="primary" onClick={this.handleAdd}>Add</Button>
                </DialogActions>
              </Dialog>      
          </div>
      ); 
    }
}

// required property:  newAssignment is a function to call to perform the Add action
NewAssignment.propTypes = {
  newAssignment : PropTypes.func.isRequired
}

export default NewAssignment;