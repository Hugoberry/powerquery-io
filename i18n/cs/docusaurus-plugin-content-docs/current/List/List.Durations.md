---
title: List.Durations
---

# List.Durations


## Description

Vygeneruje seznam hodnot duration na základě předané výchozí hodnoty, počtu a přírůstkové hodnoty duration.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Vrátí seznam hodnot <code>count</code> <code>duration</code> začínající hodnotou <code>start</code> a narůstající o předanou hodnotu <code>duration</code> <code>step</code>.


## Examples

### Example #1 
Vytvoří seznam 5 hodnot začínající 1 hodinou a narůstající o hodinu.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
