---
title: GeometryPoint.From
---

# GeometryPoint.From


Создает запись, представляющую геометрическую точку по ее компонентам.


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

Создает запись, представляющую геометрическую точку по ее компонентам, таким как координаты X и Y, а также координата Z и расстояние (M), если они доступны. При необходимости можно указать идентификатор пространственной ссылки (SRID), если он отличается от значения по умолчанию (0).



## Category
Record.Serialization
