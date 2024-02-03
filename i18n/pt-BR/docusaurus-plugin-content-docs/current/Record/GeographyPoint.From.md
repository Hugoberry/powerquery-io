---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Cria um registro que representa um ponto geográfico das partes.


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


## Details

Cria um registro que representa um ponto geográfico das partes constituintes, como longitude, latitude e, se estiver presente, Z (elevação) e M (medida). Um SRID (identificador de referência espacial) opcional poderá ser fornecido quando for diferente do valor padrão (4326).



## Category
Record.Serialization
