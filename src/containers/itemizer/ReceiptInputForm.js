import { connect } from 'react-redux';
import * as actions from 'actions';
import RecieptInputForm from '../../components/itemizer/ReceiptInputForm';

console.log('this is in the container')
// const mapDispatchToProps = {
//   return {actions: actions)
// }



export default connect(null, actions)(ReceiptInputForm);
