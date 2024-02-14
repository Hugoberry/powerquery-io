---
title: Geography.ToWellKnownText
---

# Geography.ToWellKnownText


Преобразует значение структурированной географической точки в представление формата Well-Known Text (WKT).


## Syntax

```powerquery
Geography.ToWellKnownText(
    input as record,
    optional omitSRID as logical
) as text
```


## Remarks

Преобразует значение структурированной географической точки в представление формата Well-Known Text (WKT), определяемого организацией Open Geospatial Consortium (OGC), который используется для сериализации во многих базах данных, включая SQL Server.



## Category
Record.Serialization
