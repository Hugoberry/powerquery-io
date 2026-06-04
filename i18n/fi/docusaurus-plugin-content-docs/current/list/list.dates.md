---
title: List.Dates
---

# List.Dates


Muodostaa luettelon date-arvoista, kun annetaan alkuarvo, määrä ja lisäävä keston arvo.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Palauttaa luettelon `date`\-arvoista. Koko on `count` ja alkukohta `start`. Annettu lisäys `step` on `duration`\-arvo, joka lisätään jokaiseen arvoon.


## Examples

### Example #1
Luo 5 arvosta muodostuva luettelo, joka alkaa uudenvuodenpäivästä (#date(2011, 12, 31)) ja käyttää 1 päivän lisäystä (#duration(1, 0, 0, 0)).
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
