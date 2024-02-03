---
title: List.Durations
---

# List.Durations


## Description

Genereert een lijst met duurwaarden op basis van een aanvankelijke waarde, telling en incrementele duurwaarde.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Retourneert een lijst met <code>count</code> <code>duration</code>waarden, beginnend bij <code>start</code> en stapsgewijs verhoogd met de opgegeven <code>duration</code> <code>step</code>.


## Examples

### Example #1 
Een lijst met 5 waarden maken te beginnen bij 1 uur en oplopend in stappen van een uur.
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
