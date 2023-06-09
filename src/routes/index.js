import { createRouter, createWebHistory } from 'vue-router';

// Pages
import Home from '../screens/Home.vue';
import SelectService from '../screens/SelectService.vue';
import QrCode from '../screens/QrCode.vue';
import InsertCard from '../screens/InsertCard.vue';
import InsertCardValue from '../screens/InsertCardValue.vue';
import InsertBilhete from '../screens/InsertBilhete.vue';
import RecargaTop from '../screens/RecargaTop.vue';
import Recharge from '../screens/Recharge.vue';
import Password from '../screens/Password.vue';
import PasswordValue from '../screens/PasswordValue.vue';
import SelectPayment from '../screens/payment/SelectPayment.vue';
import SelectAmount from '../screens/payment/SelectAmount.vue';
import MoneyPayment from '../screens/payment/MoneyPayment.vue';
import TransportVoucher from '../screens/TransportVoucher.vue';
import SchoolTransportVoucher from '../screens/SchoolTransportVoucher.vue';
import TypeAmount from '../screens/payment/TypeAmount.vue';
import ProcessPayment from '../screens/payment/ProcessPayment.vue';
import ProcessMoney from '../screens/payment/ProcessMoney.vue';
import PaymentApproved from '../screens/payment/PaymentApproved.vue';
import VoucherApproved from '../screens/payment/VoucherApproved.vue';
import SchoolVoucherApproved from '../screens/payment/SchoolVoucherApproved.vue';
import Sucess from '../screens/payment/Sucess.vue';
import Print from '../screens/Print.vue';
import Preference from '../screens/Preference.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/select', component: SelectService },
    { path: '/qrcode', component: QrCode },
    { path: '/bilhete', component: InsertBilhete },
    { path: '/recargatop', component: RecargaTop },
    { path: '/insertcard/:qtd', component: InsertCard },
    { path: '/insertcardvalue/:value', component: InsertCardValue },
    { path: '/recharge', component: Recharge },
    { path: '/password/:qtd', component: Password },
    { path: '/passwordvalue/:value', component: PasswordValue },
    { path: '/selectpayment', component: SelectPayment },
    { path: '/transportvoucher', component: TransportVoucher },
    { path: '/schooltransportvoucher', component: SchoolTransportVoucher },
    { path: '/moneypayment', component: MoneyPayment },
    { path: '/selectamount', component: SelectAmount },
    { path: '/typeamount', component: TypeAmount },
    { path: '/processpayment', component: ProcessPayment },
    { path: '/processmoney', component: ProcessMoney },
    { path: '/approved', component: PaymentApproved },
    { path: '/voucherapproved', component: VoucherApproved },
    { path: '/schoolvoucherapproved', component: SchoolVoucherApproved },
    { path: '/sucess', component: Sucess },
    { path: '/print', component: Print },
    { path: '/preference', component: Preference },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;