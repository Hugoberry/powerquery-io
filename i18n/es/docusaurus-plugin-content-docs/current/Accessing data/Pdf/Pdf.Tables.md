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

Devuelve las tablas encontradas en <code>pdf</code>. Se puede proporcionar un parámetro de registro opcional, <code>options</code>, para especificar propiedades adicionales. El registro puede contener estos campos:    <ul><li><code>Implementation</code> : La versi&#243;n del algoritmo que se utilizar&#225; para identificar las tablas. Las versiones antiguas est&#225;n disponibles s&#243;lo por compatibilidad con el pasado, para evitar que las consultas antiguas se rompan por las actualizaciones del algoritmo. La versi&#243;n m&#225;s reciente deber&#237;a dar siempre los mejores resultados. Los valores v&#225;lidos son &quot;1.3&quot;, &quot;1.2&quot;, &quot;1.1&quot; o nulo.</li><li><code>StartPage</code> : Especifica la primera p&#225;gina del intervalo de p&#225;ginas que hay que examinar. El valor predeterminado es &quot;1&quot;.</li><li><code>EndPage</code> : Especifica la &#250;ltima p&#225;gina del intervalo de p&#225;ginas que hay que examinar. La opci&#243;n predeterminada es la &#250;ltima p&#225;gina del documento.</li><li><code>MultiPageTables</code> : Controla si las tablas similares de las p&#225;ginas consecutivas se combinar&#225;n autom&#225;ticamente en una sola tabla. El valor predeterminado es &quot;true&quot;.</li><li><code>EnforceBorderLines</code> : Controla si las l&#237;neas de borde siempre se aplican como l&#237;mites de celda (cuando el valor es &quot;true&quot;) o solo se utilizan como una de las sugerencias para determinar los l&#237;mites de la celda (cuando el valor es &quot;false&quot;). El valor predeterminado es &quot;false&quot;.</li></ul>    


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
