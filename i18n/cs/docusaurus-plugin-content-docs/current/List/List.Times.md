---
title: List.Times
---

# List.Times


## Description

Vygeneruje seznam hodnot time na základě předané výchozí hodnoty, počtu a přírůstkové hodnoty duration.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

Vrátí seznam hodnot <code>time</code> o velikosti <code>count</code> začínající hodnotou <code>start</code>. Daný přírůstek <code>step</code> je hodnota <code>duration</code>, která je přičtena ke každé hodnotě.


## Examples

### Example #1 
Vytvoří seznam 4 hodnot začínajících polednem (#time(12, 0, 0)) a narůstajících o jednu hodinu (#duration(0, 1, 0, 0)).
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
