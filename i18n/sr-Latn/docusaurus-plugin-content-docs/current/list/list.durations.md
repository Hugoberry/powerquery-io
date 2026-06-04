---
title: List.Durations
---

# List.Durations


Generiše listu vrednosti trajanja na osnovu početne vrednosti, broja i inkrementalne vrednosti trajanja.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

Vraća listu vrednosti `count` `duration`, počev od `start` i sa inkrementima koje određuje data vrednost `duration` `step`.


## Examples

### Example #1
Kreiranje liste od 5 vrednosti počev od 1 sata i sa inkrementima od jednog sata.
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
