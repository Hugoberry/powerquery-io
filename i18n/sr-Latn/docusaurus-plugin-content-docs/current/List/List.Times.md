---
title: List.Times
---

# List.Times


## Description

Generiše listu vrednosti time na osnovu početne vrednosti, broja i inkrementalne vrednosti trajanja.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

Vraća listu vrednosti <code>time</code> veličine <code>count</code>, počev od <code>start</code>. Dati inkrement, <code>step</code>, predstavlja vrednost <code>duration</code> koja se dodaje svakoj vrednosti.


## Examples

### Example #1 
Kreiranje liste od 4 vrednosti koja počinje od podneva (#time(12, 0, 0)) sa inkrementima od jednog sata (#duration(0, 1, 0, 0)).
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
