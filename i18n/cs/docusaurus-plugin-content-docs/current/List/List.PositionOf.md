---
title: List.PositionOf
---

# List.PositionOf


## Description

Vrátí posunutí hodnoty v seznamu.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Vrátí posunutí hodnoty <code>value</code> v seznamu <code>list</code>. Pokud se hodnota v seznamu nevyskytuje, vrátí hodnotu -1.    Lze zadat volitelný parametr výskytu <code>occurrence</code>.<ul>   <li><code>occurrence</code>: Maximální počet výskytů k ohlášení.</li></ul>


## Examples

### Example #1 
Vyhledá pozici v seznamu \{1, 2, 3}, na které se vyskytuje hodnota 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
