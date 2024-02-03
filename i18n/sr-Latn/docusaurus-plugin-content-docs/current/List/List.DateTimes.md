---
title: List.DateTimes
---

# List.DateTimes


## Description

Generiše listu vrednosti datetime na osnovu početne vrednosti, broja i inkrementalne vrednosti trajanja.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Vraća listu vrednosti <code>datetime</code> veličine <code>count</code>, počev od <code>start</code>. Dati inkrement, <code>step</code>, predstavlja vrednost <code>duration</code> koja se dodaje svakoj vrednosti.


## Examples

### Example #1 
Kreiranje liste od 10 vrednosti koja počinje 5 minuta pre prvog dana Nove godine (#datetime(2011, 12, 31, 23, 55, 0)) sa inkrementima od 1 minuta (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
