---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Pievieno kolonnu kubam, kas satur tā mēra rezultātus, kurš lietots katras rindas kontekstā.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Pievieno kolonnu `column` kubam `cube`, kas satur mēra `measureSelector` rezultātus, kurš lietots katras rindas kontekstā. Mēra lietojumu ietekmē dimensijas granularitātes un segmentēšanas izmaiņas. Mēra vērtības tiks pielāgotas pēc noteiktu kuba operāciju veikšanas.



## Category
Cube
