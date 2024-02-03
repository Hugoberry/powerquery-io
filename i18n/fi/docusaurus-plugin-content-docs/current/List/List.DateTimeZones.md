---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Muodostaa luettelon datetimezone-arvoista, kun annetaan alkuarvo, määrä ja lisäävä keston arvo.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Palauttaa luettelon <code>datetimezone</code>-arvoista. Koko on <code>count</code> ja alkukohta <code>start</code>. Annettu lisäys <code>step</code> on <code>duration</code>-arvo, joka lisätään jokaiseen arvoon.


## Examples

### Example #1 
Luo kymmenestä arvosta luettelo, joka alkaa 5 minuuttia ennen uudenvuodenpäivää (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) ja käyttää yhden minuutin lisäystä (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
