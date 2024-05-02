import PublishShirtComponent from "@/components/posts/publish-shirt.component.vue";
import EditShirtComponent from "@/components/posts/edit-shirt.component.vue";
import PublishedShirtsComponent from "@/components/posts/published-shirts.component.vue";
import ShirtDescriptionComponent from '@/components/catalogue/shirt-description.component.vue';
import UserProfileComponent from '@/components/profile/user-profile.component.vue';
import EditProfileComponent from '@/components/profile/edit-profile.component.vue';
import EditPaymentMethod from "@/components/profile/edit-payment-method.component.vue";
import EditPassword from "@/components/profile/edit-password.component.vue";
import UserCart from "@/components/cart/user-cart.component.vue";
import TheToolbar from "@/components/shared/the-toolbar.component.vue";
import {createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: TheToolbar },

  { path: '/published', component: PublishedShirtsComponent},
  { path: '/published/:id', name: "shirtDescription", component: ShirtDescriptionComponent},
  { path: '/publish', component: PublishShirtComponent},
  { path: '/edit-shirt/:id', name: "shirtEdit",component: EditShirtComponent},

  { path: '/profile', component: UserProfileComponent },
  { path: '/edit-profile', component: EditProfileComponent },
  { path: '/edit-password', component: EditPassword },
  { path: '/edit-payment-method', component: EditPaymentMethod },
  
  { path: '/catalogue', component: ShirtsCatalogueComponent},
  { path: '/cart', component: UserCart},
  { path: '/catalogue/:id', name: "shirtDescription", component: ShirtDescriptionComponent}

];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;