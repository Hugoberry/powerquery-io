---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Cria um registro que representa um ponto geométrico das partes.


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


## Details

Cria um registro que representa um ponto geométrico das partes constituintes, como coordenada X, coordenada Y e, se estiver presente, coordenada Z e M (medida). Um SRID (identificador de referência espacial) opcional poderá ser fornecido se for diferente do valor padrão (0).



## Category
Record.Serialization
