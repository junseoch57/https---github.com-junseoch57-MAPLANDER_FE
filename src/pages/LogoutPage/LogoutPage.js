// src/pages/LogoutPage.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import ToastMessage from '../../common/ToastMessage';

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    api.post("/auth/logout")       // 수정: 백엔드 로그아웃 API 호출
      .finally(() => {
        navigate("/", { replace: true }); // 수정: 로그아웃 후 메인으로 리다이렉트
      });
  }, [navigate]);

  return <div>로그아웃 중입니다…</div>;
}
