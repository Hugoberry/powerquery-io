---
title: List.Durations
---

# List.Durations


Genereert een lijst met duurwaarden op basis van een aanvankelijke waarde, telling en incrementele duurwaarde.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

Retourneert een lijst met `count` `duration`waarden, beginnend bij `start` en stapsgewijs verhoogd met de opgegeven `duration` `step`.


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
