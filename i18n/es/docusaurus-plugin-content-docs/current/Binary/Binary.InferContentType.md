---
title: Binary.InferContentType
---

# Binary.InferContentType


Lee la secuencia binaria e intenta determinar el tipo de contenido y la información de formato de la secuencia.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Remarks

Devuelve un registro con el campo Content.Type, que contiene el tipo MIME inferido.    Si el tipo de contenido inferido es text/\* y se detecta una página de códigos de codificación, se devolverá también el campo Content.Encoding, que contiene el cifrado de la secuencia.    Si el tipo de contenido inferido es text/csv y el formato es delimitado, se devolverá también el campo Csv.PotentialDelimiter, que contiene una tabla para el análisis de delimitadores potenciales.    Si el tipo de contenido inferido es text/csv y el formato tiene un ancho fijo, se devolverá también el campo Csv.PotentialPositions, que contiene una lista para el análisis de las potenciales posiciones de columna de ancho fijo.



## Category
Binary
