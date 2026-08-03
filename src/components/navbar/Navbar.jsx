import React from 'react'
import { Link } from 'react-router-dom'
import useAuthStore from '../../store/useAuthStore'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18next.jsx'
export default function Navbar() {
  const changeLanguage = () => {
    const lan=i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(lan);
  }
  const { t } = useTranslation();
  const navigate = useNavigate();
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.Logout);
  const handleLogout = () => {
    logout();
    navigate('/login');
  }
  return (
    <nav>
      <Link to="/">{t('Home')}</Link>
      <Link to="/products">{t('Products')}</Link>
      {token ? (
        <> 
          <Link to="/cart">{t('Cart')}</Link>
          <Link to="/profile">{t('Profile')}</Link>
          <Link to="/login" onClick={handleLogout} component="button">
            {t('Logout')}
          </Link>
         
        </>
      ) : (
        <>
          <Link to="/login">{t('Login')}</Link>
          <Link to="/register">{t('Register')}</Link>
          
        </>
      )}
      <button onClick={changeLanguage}>
        {i18n.language === 'en' ? 'Ar' : 'En'}
      </button>
    </nav>
  )
}
