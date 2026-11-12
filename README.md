# 🎬 Mi Cartelera Personal — Entregable 3

Aplicación React + TypeScript + Vite, con Bootstrap. Contiene páginas de búsqueda, colección personal, detalle y editor. Preparada para usar **TMDB** a través de Supabase Edge Functions, **Supabase Auth** y **PostgreSQL con RLS**.

> **Estado:** este repositorio es una reconstrucción separada del Entregable 3, derivada de código de trabajo del Entregable 4. Sin credenciales se ejecuta en **modo demostración** con títulos ficticios y localStorage. En ese modo NO cumple autenticación real, TMDB real ni RLS. El cumplimiento de todos los requisitos requiere configurar Supabase/TMDB y realizar pruebas con dos cuentas.

## Funcionalidades incluidas en el código

- Registro, login, logout y rutas privadas en modo real (Supabase Auth).
- Búsqueda de películas y series reales mediante una Edge Function que llama a TMDB en modo real.
- Agregar, listar, editar y eliminar elementos de `mi_lista` en PostgreSQL (modo real).
- Estados `por_ver`, `viendo`, `vista` tipados con TypeScript.
- Calificaciones personales 1–5 y comentarios.
- Vista de detalle con sinopsis, póster, elenco principal consultado en TMDB y calificación.
- Filtros por estado, ordenación y contadores.
- Diseño adaptable para móvil con Bootstrap y CSS.
- Modo demo opcional con datos ficticios almacenados localmente.

**Nota de verificación:** la sección de elenco está implementada en la vista y la consulta de TMDB, pero su respuesta real debe comprobarse tras configurar el servicio.

## Instalar y ejecutar

Requiere Node.js y npm:

```bash
npm install
npm run dev
npm run build
```

Para pruebas locales en navegador, abre la URL de Vite que aparece en la terminal.

## Configurar Supabase

1. Crea un proyecto en [Supabase](https://supabase.com/dashboard).
2. Copia `.env.example` a `.env.local` y rellena solo la URL y la clave **publicable**.
3. Ejecuta `supabase/migrations/20261019000000_mi_lista.sql` desde el SQL Editor.
4. Habilita email/password en Supabase Auth y verifica con dos cuentas.
5. En Supabase Edge Functions, configura el secreto `TMDB_READ_ACCESS_TOKEN` y despliega la función `tmdb` con `npx supabase functions deploy tmdb`.
6. Verifica que nadie accede a la colección de otro usuario mediante las políticas RLS.

**Seguridad:** no coloques el token de TMDB, `service_role` ni claves secretas en variables `VITE_`, GitHub ni en capturas. La clave publicable de Supabase solo debe emplearse con RLS habilitado.

## Publicación en Vercel

1. Importa el repositorio desde GitHub.
2. Selecciona Framework Preset `Vite`, Build Command `npm run build` y Output Directory `dist`.
3. Configura variables públicas `VITE_SUPABASE_URL` y `VITE_SUPABASE_PUBLISHABLE_KEY` para activar el modo real y vuelve a desplegar.
4. Verifica las rutas internas y agrega el dominio a los redirects de Supabase Auth.

## Capturas y evidencias

Revisa [docs/CAPTURAS.md](docs/CAPTURAS.md). Para acreditar el deber deben agregarse capturas verdaderas de las pantallas y de la verificación RLS.

## Procedencia

Proyecto reconstruido posteriormente a partir del trabajo de E4; no debe presentarse como el repositorio histórico original de un E3 realizado previamente.

This product uses the TMDB API but is not endorsed or certified by TMDB.
