/* =========================================================
   BUSCADOR DE MATRICES DE RIESGO
   Gestión Humana · Seguridad y Salud en el Trabajo
   Universidad del Norte
   ---------------------------------------------------------
   Reemplaza los valores entre comillas por los tuyos.
   NO pegues aquí la llave "service_role" ni la "secret":
   este archivo es público y cualquiera puede leerlo.
   Solo va la llave publishable / anon.
   ========================================================= */

window.MATRICES_CONFIG = {

  // 1. URL del proyecto de Supabase. SIN /rest/v1/ al final.
  //    Ejemplo: "https://abcdefghijklm.supabase.co"
  supabaseUrl: "https://XXXXXXXXXXXX.supabase.co",

  // 2. Llave publishable (anon). Empieza por "sb_publishable_" o por "eyJ..."
  supabaseKey: "PEGA_AQUI_LA_LLAVE_PUBLISHABLE",

  // 3. Correo del usuario editor creado en Supabase > Authentication.
  //    La contraseña NO va aquí: es la clave que el equipo escribe en la app.
  editorEmail: "sst.matrices@uninorte.edu.co",

  // 4. Cada cuántos meses una matriz se marca en rojo como vencida.
  //    12 meses es el periodo con el que se actualiza la identificación
  //    de peligros. Tres meses antes se marca en amarillo.
  mesesVigencia: 12,

  // 5. Carpeta de Storage, por si suben archivos directo a la página
  //    en lugar de enlazarlos desde SharePoint.
  bucket: "matrices"

};
