---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Sukuriamas įrašas, vaizduojantis geometrinį tašką iš dalių.


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

Sukuriamas įrašas, vaizduojantis geometrinį tašką iš jo sudedamųjų dalių, pvz., X koordinatės, Y koordinatės ir, jei yra, Z koordinatės bei mato (M). Pasirinktinis koordinačių sistemos identifikatorius (SRID) gali būti pateiktas, jei skiriasi nuo numatytosios reikšmės (0).



## Category
Record.Serialization
