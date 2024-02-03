---
title: List.First
---

# List.First


## Description

Vrne prvo vrednost seznama ali navedeno privzeto vrednost, če je seznam prazen.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Vrne prvi element na seznamu <code>list</code> ali izbirno privzeto vrednost, <code>defaultValue</code>, če je seznam prazen.    Če je seznam prazen in privzeta vrednost ni določena, funkcija vrne <code>null</code>.


## Examples

### Example #1 
Poiščite prvo vrednost na seznamu \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Poiščite prvo vrednost na seznamu \{}. Če je seznam prazen, vrnite –1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
