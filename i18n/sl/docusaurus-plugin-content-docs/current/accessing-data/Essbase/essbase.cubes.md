---
title: Essbase.Cubes
---

# Essbase.Cubes


Vrne kocke iz primerka Essbase, ki so združene po strežniku Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo iz kock, ki so združene po strežnika Essbase iz primerka Essbase v strežniku APS `url`. Določite lahko izbirni parameter zapisa `options`, s katerim nadzorujete te možnosti:

-   `CommandTimeout` : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.



## Category
Accessing data
