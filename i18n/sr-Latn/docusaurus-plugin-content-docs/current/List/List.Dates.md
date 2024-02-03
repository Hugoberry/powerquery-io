---
title: List.Dates
---

# List.Dates


## Description

Generiše listu date vrednosti na osnovu početne vrednosti, broja i inkrementalne vrednosti trajanja.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Vraća listu vrednosti <code>date</code> veličine <code>count</code>, počev od <code>start</code>. Dati inkrement, <code>step</code>, predstavlja vrednost <code>duration</code> koja se dodaje svakoj vrednosti.


## Examples

### Example #1 
Kreiranje liste od 5 vrednosti koja počinje poslednjeg dana u godini (#date(2011, 12, 31)) sa inkrementima od 1 dana (#duration(1, 0, 0, 0)).
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
