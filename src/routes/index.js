import Home from "../pages/Home/Home";
import List from "../pages/List/List";
import Signin from "../pages/Signin/Signin";
const PublicRouter = [
  { path: "/trang-chu", page: Home, layout: true },
  { path: "/danh-sach", page: List, layout: true },
  { path: "/dang-nhap", page: Signin, layout: false },
];

export { PublicRouter };
