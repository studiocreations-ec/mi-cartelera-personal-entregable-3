import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Film, Heart, Search, Sparkles, Star } from 'lucide-react';
import { listarColeccion } from '../servicios/coleccion';
import { buscarTitulos } from '../servicios/catalogo';
import type { MiItem, Titulo } from '../types';
import { Tarjeta } from '../componentes/Tarjeta';
export default function Inicio(){
 const [items,setItems]=useState<MiItem[]>([]);
 const [tendencias,setTendencias]=useState<Titulo[]>([]);
 const [error,setError]=useState('');
 useEffect(()=>{let activo=true;
  void Promise.all([listarColeccion(),buscarTitulos('')]).then(([coleccion,titulos])=>{
   if(activo){setItems(coleccion);setTendencias(titulos.slice(0,4));}
  }).catch((e:unknown)=>{if(activo)setError(e instanceof Error?e.message:'Error al cargar datos');});
  return()=>{activo=false;};
 },[]);
 return <main>
  <div className="page-overline"><span className="pulse-dot"/> TU CINE, A TU RITMO</div>
  <section className="hero-home"><div className="hero-copy"><span className="eyebrow">TU CARTELERA DIGITAL</span>
   <h1>Todas tus películas. <em>En un solo lugar.</em></h1>
   <p>Descubre títulos, guarda películas y series, organiza lo que quieres ver y registra tus opiniones personales.</p>
   <div className="hero-actions"><Link to="/buscar" className="btn-main"><Search size={18}/> Explorar películas <ArrowRight size={18}/></Link><Link to="/coleccion" className="btn-ghost">Ver mi colección ↗</Link></div>
   </div><div className="hero-art" aria-hidden="true"><div className="hero-ring"><div className="hero-circle"><span>✦</span><strong>MI<br/>CINE</strong><small>YOUR WATCHLIST</small></div></div><div className="hero-pill hero-pill-top"><Film size={16}/> PELÍCULAS Y SERIES</div><div className="hero-pill hero-pill-bottom"><Star size={16}/> TUS RESEÑAS</div></div></section>
  {error&&<div className="alert alert-warning" role="alert">{error}</div>}
  <section className="stats-grid" aria-label="Resumen de colección">
   <div className="stat-card"><span><Heart size={18}/></span><strong>{items.length}</strong><small>En mi lista</small></div>
   <div className="stat-card"><span><Film size={18}/></span><strong>{items.filter(t=>t.estado==='por_ver').length}</strong><small>Por ver</small></div>
   <div className="stat-card"><span><Sparkles size={18}/></span><strong>{items.filter(t=>t.estado==='viendo').length}</strong><small>Viendo</small></div>
   <div className="stat-card"><span><Star size={18}/></span><strong>{items.filter(t=>t.estado==='vista').length}</strong><small>Vistas</small></div>
  </section>
  <section className="section-space"><div className="section-heading"><div><span className="eyebrow">TU ESPACIO PERSONAL</span><h2>Una lista que sí es tuya</h2><p>Organiza tus películas a tu manera.</p></div><Link to="/coleccion" className="section-link">Mi lista <ArrowRight size={16}/></Link></div>
   <div className="benefit-grid"><div className="benefit"><span className="benefit-icon"><Search size={24}/></span><h3>Descubre</h3><p>Busca películas y series reales en TMDB cuando actives el modo real.</p></div><div className="benefit"><span className="benefit-icon"><Heart size={24}/></span><h3>Organiza</h3><p>Clasifica cada título como por ver, viendo o vista.</p></div><div className="benefit"><span className="benefit-icon"><Star size={24}/></span><h3>Califica</h3><p>Añade estrellas y comentarios personales a tus películas favoritas.</p></div></div>
  </section>
  {tendencias.length>0&&<section className="section-space"><div className="section-heading"><div><span className="eyebrow">PARA EMPEZAR</span><h2>Títulos para explorar</h2></div></div><div className="movie-grid">{tendencias.map(f=><Tarjeta key={`${f.tipo_contenido}-${f.tmdb_id}`} titulo={f}/>)}</div></section>}
 </main>;
}
