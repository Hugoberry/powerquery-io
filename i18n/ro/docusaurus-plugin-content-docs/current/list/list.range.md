---
title: List.Range
---

# List.Range


Returnează un subset al listei începând de la un decalaj.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

Returnează un subset de `list` începând cu `offset`. Un parametru opțional, `count`, setează numărul maxim de elemente din subset.


## Examples

### Example #1
Găsiţi subsetul începând de la decalajul 6 al listei de numere de la 1 la 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2
Găsiţi subsetul de lungime 2 de la decalajul 6, din lista de numere de la 1 la 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
