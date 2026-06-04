---
title: List.Dates
---

# List.Dates


Ustvari seznam vrednosti"date", če navedete začetno vrednost, število in prirastno trajanje.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Vrne seznam vrednosti `date` velikosti `count`, ki se začne z `start`. Dani prirastek, `step`, je vrednost `duration`, ki je dodana vsaki vrednosti.


## Examples

### Example #1
Ustvari seznam 5 vrednosti, ki se začne na večer pred novim letom (#date(2011, 12, 31)) in se povečuje za 1 dan (#duration(1, 0, 0, 0)).
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
