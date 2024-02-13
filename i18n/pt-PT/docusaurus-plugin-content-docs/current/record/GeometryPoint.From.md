---
title: GeometryPoint.From
---

# GeometryPoint.From


Cria um registo que representa um ponto geométrico a partir das partes que o constituem.


## Syntax

```powerquery
GeometryPoint.From(
    x as number,
    y as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Remarks

Cria um registo que representa um ponto geométrico a partir das partes que o constituem, como coordenada X, coordenada Y e, se presente, coordenada Z e medida (M). Pode ser indicado um identificador de referência espacial (SRID) opcional, se for diferente do valor predefinido (0).



## Category
Record.Serialization
