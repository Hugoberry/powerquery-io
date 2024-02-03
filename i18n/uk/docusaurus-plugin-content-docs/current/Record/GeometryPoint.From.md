---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Створює запис, який відтворює геометричну точку з частин.


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

Створює запис, який представляє геометричну точку зі складових частин, як-от Х-координата, Y-координата, а також Z-координата та масштаб (M). Можна вказати додатковий ідентифікатор просторової системи (SRID), якщо значення відрізняється від стандартного значення (0).



## Category
Record.Serialization
