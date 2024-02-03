---
title: Netezza.Database
---

# Netezza.Database


## Description

Importa datos de una base de datos IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Devuelve una tabla con las tablas, visualizaciones y funciones almacenadas de Netezza de la base de datos <code>database</code> del servidor de Netezza <code>server</code>. Opcionalmente, el puerto se puede especificar con el servidor separado por dos puntos. También se puede especificar un parámetro de registro, <code>options</code>, para controlar las opciones siguientes:<ul>        <li><code>CreateNavigationProperties</code>: lógica ("true" o "false") que establece si hay que generar propiedades de navegación sobre los valores devueltos. El valor predeterminado es "true".</li>        <li><code>HierarchicalNavigation</code>: lógica ("true" o "false") que establece si hay que consultar las tablas agrupadas según el nombre de su esquema. El valor predeterminado es "false".</li>        <li><code>ConnectionTimeout</code>: duración que controla el período de tiempo que hay que esperar antes de dejar de intentar establecer una conexión con el servidor. El valor predeterminado depende del controlador.</li>        <li><code>CommandTimeout</code>: duración que controla el período de tiempo durante el que se puede ejecutar la consulta de servidor antes de cancelarla. El valor predeterminado depende del controlador.</li><li><code>NormalizeDatabaseName</code>: lógica ("true" o "false") que establece si hay que normalizar el nombre de la base de datos en mayúsculas, o bien es necesario interpretarlo literalmente. El valor predeterminado es "true".</li></ul>El parámetro de registro se especifica como [opción1 = valor1, opción2 = valor2...].


## Examples

### Example #1 
Enumera las tablas de un proyecto de IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



