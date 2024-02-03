---
title: List.DateTimes
---

# List.DateTimes


## Description

Muodostaa luettelon datetime-arvoista, kun annetaan alkuarvo, määrä ja lisäävä keston arvo.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Palauttaa luettelon <code>datetime</code>-arvoista. Koko on <code>count</code> ja alkukohta <code>start</code>. Annettu lisäys <code>step</code> on <code>duration</code>-arvo, joka lisätään jokaiseen arvoon.


## Examples

### Example #1 
Luo kymmenestä arvosta muodostuva luettelo, joka alkaa 5 minuuttia ennen uudenvuodenpäivää (#datetime(2011, 12, 31, 23, 55, 0)) ja käyttää yhden minuutin lisäystä (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
