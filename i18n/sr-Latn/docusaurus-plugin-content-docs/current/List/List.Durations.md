---
title: List.Durations
---

# List.Durations


## Description

Generiše listu vrednosti trajanja na osnovu početne vrednosti, broja i inkrementalne vrednosti trajanja.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Vraća listu vrednosti <code>count</code> <code>duration</code>, počev od <code>start</code> i sa inkrementima koje određuje data vrednost <code>duration</code> <code>step</code>.


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
