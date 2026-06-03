---
title: Pdf.Tables
---

# Pdf.Tables


Devuelve cualquier tabla encontrada en un archivo PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Devuelve las tablas encontradas en `pdf`. Se puede proporcionar un parámetro de registro opcional, `options`, para especificar propiedades adicionales. El registro puede contener estos campos:

-   `Implementation` : La versión del algoritmo que se utilizará para identificar las tablas. Las versiones antiguas están disponibles sólo por compatibilidad con el pasado, para evitar que las consultas antiguas se rompan por las actualizaciones del algoritmo. La versión más reciente debería dar siempre los mejores resultados. Los valores válidos son "1.3", "1.2", "1.1" o nulo.
-   `StartPage` : Especifica la primera página del intervalo de páginas que hay que examinar. El valor predeterminado es "1".
-   `EndPage` : Especifica la última página del intervalo de páginas que hay que examinar. La opción predeterminada es la última página del documento.
-   `MultiPageTables` : Controla si las tablas similares de las páginas consecutivas se combinarán automáticamente en una sola tabla. El valor predeterminado es "true".
-   `EnforceBorderLines` : Controla si las líneas de borde siempre se aplican como límites de celda (cuando el valor es "true") o solo se utilizan como una de las sugerencias para determinar los límites de la celda (cuando el valor es "false"). El valor predeterminado es "false".


## Examples

### Example #1
Devuelve las tablas de sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Acceso a los datos
