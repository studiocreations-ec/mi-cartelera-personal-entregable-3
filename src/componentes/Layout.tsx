import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Clapperboard, Compass, Heart, LogOut, Github, Film } from 'lucide-react';
import { useAuth } from '../contexto/Auth';
import { supabase } from '../servicios/cliente';
export function Layout(){
 const {user,demo}=useAuth();const navigate=useNavigate();
 async function salir(){if(supabase)await supabase.auth.signOut();navigate('/entrar');}
 return <div className="app-shell">
  <aside className="sidebar">
   <Link to="/" className="brand"><span className="brand-icon"><Clapperboard size={22}/></span><span>MI <b>CARTELERA</b><small>PERSONAL · E3</small></span></Link>
   <p className="sidebar-label">TU ESPACIO</p>
   <nav aria-label="Navegación principal" className="nav-stack">
    <NavLink to="/" end><Compass size={19}/> Inicio</NavLink>
    <NavLink to="/buscar"><Film size={19}/> Explorar títulos</NavLink>
    <NavLink to="/coleccion"><Heart size={19}/> Mi colección</NavLink>
   </nav>
   <div className="sidebar-bottom">
    <div className="sidebar-spotlight"><span className="spotlight-label">TU CARTELERA</span><strong>Todo en un solo lugar</strong><p>Descubre películas, guárdalas y deja tus propias reseñas.</p><Link to="/buscar" className="spotlight-link">Descubrir títulos ↗</Link></div>
    <div className="profile"><span className="avatar">{(user?.email??'D')[0].toUpperCase()}</span><div><strong>{demo?'Cuenta de demostración':user?.email?.split('@')[0]??'Invitado'}</strong><small>{demo?'Solo datos locales':user?.email??''}</small></div>{!demo&&<button className="icon-button" onClick={()=>{void salir();}} aria-label="Cerrar sesión"><LogOut size={17}/></button>}</div>
   </div>
  </aside>
  <div className="main-region">
   <header className="mobile-header"><Link to="/" className="mobile-brand"><Clapperboard size={19}/> MI CARTELERA</Link><span className="mobile-trailing">E3</span></header>
   {demo&&<div className="demo-ribbon" role="status">MODO DEMOSTRACIÓN · Películas ficticias y datos locales, sin login real. Para activar TMDB y Supabase, configura <code>.env.local</code>.</div>}
   <div className="content"><Outlet/></div>
   <footer className="footer"><span>© 2026 Mi Cartelera Personal · Proyecto académico</span><span><Github size={14}/> React + TypeScript + Supabase + TMDB · <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">TMDB</a></span><small>This product uses the TMDB API but is not endorsed or certified by TMDB.</small></footer>
   <nav className="mobile-nav" aria-label="Navegación móvil"><NavLink to="/" end><Compass size={19}/>Inicio</NavLink><NavLink to="/buscar"><Film size={19}/>Buscar</NavLink><NavLink to="/coleccion"><Heart size={19}/>Mi lista</NavLink></nav>
  </div>
 </div>;
}
