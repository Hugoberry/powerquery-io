---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Создает запись, представляющую географическую точку по ее компонентам.


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

Создает запись, представляющую географическую точку по ее составным компонентам, таким как долгота и широта, а также высота над уровнем моря (Z) и расстояние (M), если они доступны. При необходимости можно указать идентификатор пространственной ссылки (SRID), если он отличается от значения по умолчанию (4326).



## Category
Record.Serialization
