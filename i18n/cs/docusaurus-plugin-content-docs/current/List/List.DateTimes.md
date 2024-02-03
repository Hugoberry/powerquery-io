---
title: List.DateTimes
---

# List.DateTimes


## Description

Vygeneruje seznam hodnot datetime na základě předané výchozí hodnoty, počtu a přírůstkové hodnoty duration.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Vrátí seznam hodnot <code>datetime</code> o velikosti <code>count</code> začínající hodnotou <code>start</code>. Daný přírůstek <code>step</code> je hodnota <code>duration</code>, která je přičtena ke každé hodnotě.


## Examples

### Example #1 
Vytvoří seznam 10 hodnot začínajících 5 minut před 1. lednem (#datetime(2011, 12, 31, 23, 55, 0)) a narůstajících o jednu minutu (#duration(0, 0, 1, 0)).
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
