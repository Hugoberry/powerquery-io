---
title: List.Durations
---

# List.Durations


Ustvari seznam vrednosti"duration", če navedete začetno vrednost, število in prirastno trajanje.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

Vrne seznam vrednosti `duration` `count`, ki se začne z `start` in poveča za dano vrednost `duration` `step`.


## Examples

### Example #1
Ustvarite seznam 5 vrednosti, ki se začne z 1 uro in povečuje za uro.
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
