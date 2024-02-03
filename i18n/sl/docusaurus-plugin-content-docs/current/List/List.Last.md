---
title: List.Last
---

# List.Last


## Description

Vrne zadnjo vrednost seznama ali navedeno privzeto vrednost, če je seznam prazen.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Vrne zadnji element na seznamu <code>list</code> ali izbirno privzeto vrednost, <code>defaultValue</code>, če je seznam prazen.    Če je seznam prazen in privzeta vrednost ni določena, funkcija vrne <code>null</code>.


## Examples

### Example #1 
Poiščite zadnjo vrednost na seznamu \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Poiščite zadnjo vrednost na seznamu \{} ali –1, če je seznam prazen.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
