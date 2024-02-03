---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Vrne kocke iz primerka Essbase, ki so združene po strežniku Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Vrne tabelo iz kock, ki so združene po strežnika Essbase iz primerka Essbase v strežniku APS <code>url</code>. Določite lahko izbirni parameter zapisa <code>options</code>, s katerim nadzorujete te možnosti:    <ul><li><code>CommandTimeout</code> : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.</li></ul>



## Category
Accessing data
