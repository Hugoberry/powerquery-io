---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Створює запис, який відтворює географічну точку з частин.


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

Створює запис, який відтворює географічну точку з її складових частин, як-от довгота, широта, а також висота (Z) і масштаб (M). Можна вказати додатковий ідентифікатор просторової системи (SRID), якщо він відрізняється від стандартного значення (4326).



## Category
Record.Serialization
