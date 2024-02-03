---
title: List.Durations
---

# List.Durations


## Description

Vygeneruje zoznam hodnôt trvania s danou počiatočnou hodnotou, počtom a hodnotou prírastku trvania.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Vráti zoznam hodnôt <code>count</code> <code>duration</code>, počnúc od hodnoty <code>start</code> a s prírastkom daným funkciou <code>duration</code> <code>step</code>.


## Examples

### Example #1 
Vytvorte zoznam 5 hodnôt, počnúc 1 hodinou a s prírastkom o jednu hodinu.
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
