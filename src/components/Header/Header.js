import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/trang-chu">Trang chu</Link>
      <Link to="/danh-sach">Danh sach</Link>
      <Link to="dang-nhap">Dang nhap</Link>
    </div>
  );
}
