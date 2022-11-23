import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/Vector.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
  saleId: number;
};

const NotificationBtn = ({ saleId }: Props) => {
  function notify() {
    axios.get(`${BASE_URL}/sales/${saleId}/notification`).then((response) => {
      toast.info('SMS enviado com sucesso');
    });
  }

  return (
    <div className="dsmeta-red-btn" onClick={notify}>
      <img src={icon} alt="Notificar" />
    </div>
  );
};

export default NotificationBtn;
