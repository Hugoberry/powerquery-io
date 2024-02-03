---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Vrátí první posunutí hodnoty v seznamu.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Vrátí posunutí prvního výskytu hodnoty v seznamu <code>values</code> v seznamu <code>list</code>. Pokud není nalezen žádný výskyt, vrátí hodnotu -1.    Lze zadat volitelný parametr výskytu <code>occurrence</code>.<ul>   <li><code>occurrence</code>: Maximální počet výskytů, který se může vrátit.</li></ul>


## Examples

### Example #1 
Vyhledá první pozici v seznamu \{1, 2, 3}, na které se vyskytuje hodnota 2 nebo 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
