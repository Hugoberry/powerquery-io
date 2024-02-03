---
title: Geometry.ToWellKnownText
---

# Geometry.ToWellKnownText


## Description

Преобразует значение структурированной геометрической точки в представление формата Well-Known Text (WKT).


## Syntax

```powerquery
Geometry.ToWellKnownText(
    input as record,
    optional omitSRID as logical
) as text
```


## Details

Преобразует значение структурированной геометрической точки в представление формата Well-Known Text (WKT), определяемого организацией Open Geospatial Consortium (OGC), который используется для сериализации во многих базах данных, включая SQL Server.



## Category
Record.Serialization
