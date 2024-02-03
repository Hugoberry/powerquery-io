---
title: List.First
---

# List.First


## Description

Returnează prima valoare a listei sau valoarea implicită specificată dacă este necompletată.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Returnează primul element din lista <code>list</code> sau valoarea implicită opţională, <code>defaultValue</code>, dacă lista este necompletată.    Dacă lista este necompletată şi nu se specifică o valoare implicită, funcţia returnează <code>null</code>.


## Examples

### Example #1 
Aflaţi prima valoare din lista \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Aflaţi prima valoare din lista \{}. Dacă lista este necompletată, se returnează -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
