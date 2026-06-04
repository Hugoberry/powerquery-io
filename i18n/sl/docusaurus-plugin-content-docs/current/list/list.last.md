---
title: List.Last
---

# List.Last


Vrne zadnjo vrednost seznama ali navedeno privzeto vrednost, če je seznam prazen.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Vrne zadnji element na navedenem seznamu ali izbirno privzeto vrednost, če je seznam prazen.

-   `list`: seznam za pregled.
-   `defaultValue`: (izbirno) privzeta vrednost, ki je vrnjena, če je seznam prazen. Če je seznam prazen in privzeta vrednost ni določena, funkcija vrne vrednost `null`.


## Examples

### Example #1
Poiščite zadnjo vrednost na seznamu \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Poiščite zadnjo vrednost na seznamu \{\} ali –1, če je seznam prazen.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
