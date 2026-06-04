---
title: List.Dates
---

# List.Dates


Vygeneruje seznam hodnot date na základě předané výchozí hodnoty, počtu a přírůstkové hodnoty duration.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Vrátí seznam hodnot `date` o velikosti `count` začínající hodnotou `start`. Daný přírůstek `step` je hodnota `duration`, která je přičtena ke každé hodnotě.


## Examples

### Example #1
Vytvořte seznam 5 hodnot počínaje Silvestrem (#date(2011, 12, 31)) s přírůstkem o 1 den (#duration(1, 0, 0, 0)).
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
