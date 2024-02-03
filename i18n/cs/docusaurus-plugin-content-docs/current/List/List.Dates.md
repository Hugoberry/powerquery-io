---
title: List.Dates
---

# List.Dates


## Description

Vygeneruje seznam hodnot date na základě předané výchozí hodnoty, počtu a přírůstkové hodnoty duration.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Vrátí seznam hodnot <code>date</code> o velikosti <code>count</code> začínající hodnotou <code>start</code>. Daný přírůstek <code>step</code> je hodnota <code>duration</code>, která je přičtena ke každé hodnotě.


## Examples

### Example #1 
Vytvoří seznam 5 hodnot začínajících 1. lednem (#date(2011, 12, 31)) a narůstajících o jeden den (#duration(1, 0, 0, 0)).
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
