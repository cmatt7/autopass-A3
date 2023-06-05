import { createRouter, createWebHistory } from 'vue-router';

// Pages
import Home from '../screens/Home.vue';
import SelectService from '../screens/SelectService.vue';
import QrCode from '../screens/QrCode.vue';
import InsertCard from '../screens/InsertCard.vue';
import Password from '../screens/Password.vue';
import ProcessPayment from '../screens/ProcessPayment.vue';
import PaymentApproved from '../screens/PaymentApproved.vue';
import Sucess from '../screens/Sucess.vue';
import Print from '../screens/Print.vue';
import Preference from '../screens/Preference.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/select', component: SelectService },
    { path: '/qrcode', component: QrCode },
    { path: '/insertcard', component: InsertCard },
    { path: '/password', component: Password },
    { path: '/processpayment', component: ProcessPayment },
    { path: '/approved', component: PaymentApproved },
    { path: '/sucess', component: Sucess },
    { path: '/print', component: Print },
    { path: '/preference', component: Preference },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;