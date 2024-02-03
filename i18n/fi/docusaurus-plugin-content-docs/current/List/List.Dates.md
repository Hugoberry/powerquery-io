---
title: List.Dates
---

# List.Dates


## Description

Muodostaa luettelon date-arvoista, kun annetaan alkuarvo, määrä ja lisäävä keston arvo.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Palauttaa luettelon <code>date</code>-arvoista. Koko on <code>count</code> ja alkukohta <code>start</code>. Annettu lisäys <code>step</code> on <code>duration</code>-arvo, joka lisätään jokaiseen arvoon.


## Examples

### Example #1 
Luo 5 arvosta muodostuva luettelo, joka alkaa uudenvuodenpäivästä (#date(2011, 12, 31, 23, 55, 0)) ja käyttää 1 päivän lisäystä (#duration(1, 0, 0, 0)).
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
