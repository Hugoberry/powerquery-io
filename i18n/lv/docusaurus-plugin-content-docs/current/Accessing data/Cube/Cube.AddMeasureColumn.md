---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Pievieno kolonnu kubam, kas satur tā mēra rezultātus, kurš lietots katras rindas kontekstā.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Pievieno kolonnu <code>column</code> kubam <code>cube</code>, kas satur mēra <code>measureSelector</code> rezultātus, kurš lietots katras rindas kontekstā. Mēra lietojumu ietekmē dimensijas granularitātes un segmentēšanas izmaiņas. Mēra vērtības tiks pielāgotas pēc noteiktu kuba operāciju veikšanas.



## Category
Cube
