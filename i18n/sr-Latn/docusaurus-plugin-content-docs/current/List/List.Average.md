---
title: List.Average
---

# List.Average


## Description

Vraća prosek vrednosti. Funkcioniše sa brojčanim vrednostima, vrednostima datuma, datuma i vremena, datuma i vremenske zone, i trajanja.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Vraća prosečnu vrednost za stavke sa liste, <code>list</code>. Rezultat se navodi u vidu istog tipa podataka kao vrednosti sa liste. Funkcioniše samo sa brojčanim vrednostima, vrednostima datuma, vremena, datuma i vremena, datuma i vremenske zone, i trajanja.    Ako je lista prazna, vraća se rezultat bez vrednosti.


## Examples

### Example #1 
Pronalaženje prosečne vrednosti liste brojeva, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Pronalaženje prosečne vrednosti za vrednosti datuma 1. januar 2011, 2. januar 2011. i 3. januar 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
