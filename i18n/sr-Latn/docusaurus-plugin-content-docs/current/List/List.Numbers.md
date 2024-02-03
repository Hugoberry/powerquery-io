---
title: List.Numbers
---

# List.Numbers


## Description

Vraća listu brojeva na osnovu početne vrednosti, broja i opcionalne inkrementalne vrednosti.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Details

Vraća listu brojeva na osnovu početne vrednosti, broja i opcionalne inkrementalne vrednosti. Podrazumevana inkrementalna vrednost je 1.<ul>   <li><code>start</code>: Početna vrednost sa liste.</li>   <li><code>count</code>: Broj vrednosti koje treba kreirati.</li>   <li><code>increment</code>: <i>[opcionalno]</i> Vrednost za koju se vrši povećanje. Ako se izostavi, vrednosti se povećavaju za 1.</li></ul>


## Examples

### Example #1 
Generisanje liste od 10 uzastopnih brojeva počev od 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2 
Generisanje liste od 10 brojeva počev od 1, sa inkrementom od 2 za svaki sledeći broj.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
