import Daftar from '../views/pages/daftar';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Daftar, // default page
  '/daftar': Daftar,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
