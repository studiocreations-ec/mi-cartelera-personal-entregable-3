# Entregable 3 — preparación de la entrega

Este paquete es una **reconstrucción independiente** de la funcionalidad E3, generada a partir del código compartido para el Entregable 4. **No es el trabajo original anterior**, ni demuestra por sí solo un historial de desarrollo previo a E4.

## Subida sin afectar el Entregable 4
1. Descomprime el ZIP.
2. Crea un repositorio nuevo en GitHub con nombre `mi-cartelera-entregable-3` (o una rama dedicada, si tu profesor acepta ramas).
3. Sube los archivos de esta carpeta, no el ZIP como archivo aislado. No subas secretos.
4. Si necesitas un enlace independiente, importa ese repositorio en Vercel; Framework `Vite`, Build `npm run build`, Output `dist`.
5. El enlace de la publicación del E4 demuestra una app posterior, no necesariamente una versión separada del E3.

## Requisitos que faltan en el modo demostración
- Supabase Auth real y navegación privada entre cuentas.
- Tabla `mi_lista`, relaciones y políticas RLS en Supabase.
- Token TMDB privado en una Edge Function desplegada y búsqueda real.
- Capturas de pantalla reales y comprobación con dos usuarios.
- Historial Git que refleje el desarrollo real. No fabricar commits de fechas anteriores.

## Iniciar localmente
```bash
npm install
npm run dev
npm run build
```

Para activar el modo real copia `.env.example` a `.env.local` y usa las variables de tu proyecto Supabase. Ejecuta la migración SQL y despliega la función `tmdb`. No pongas tokens secretos en `VITE_`.
