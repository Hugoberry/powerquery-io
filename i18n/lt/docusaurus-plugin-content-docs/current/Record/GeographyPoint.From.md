---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Sukuriamas įrašas, vaizduojantis geografinį tašką iš dalių.


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

Sukuriamas įrašas, vaizduojantis geografinį tašką iš jo sudedamųjų dalių, pvz., ilgumos, platumos ir, jei yra, pakilimo (Z) bei mato (M). Pasirinktinis koordinačių sistemos identifikatorius (SRID) gali būti pateiktas, jei skiriasi nuo numatytosios reikšmės (4326).



## Category
Record.Serialization
