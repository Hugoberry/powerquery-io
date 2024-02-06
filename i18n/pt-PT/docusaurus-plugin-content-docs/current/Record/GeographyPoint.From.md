---
title: GeographyPoint.From
---

# GeographyPoint.From


Cria um registo que representa um ponto geográfico a partir das partes que o constituem.


## Syntax

```powerquery
GeographyPoint.From(
    longitude as number,
    latitude as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Remarks

Cria um registo que representa um ponto geográfico a partir das partes que o constituem, como longitude, latitude e, se presente, elevação (Z) e medida (M). Pode ser indicado um identificador de referência espacial (SRID) opcional, se for diferente do valor predefinido (4326).



## Category
Record.Serialization
