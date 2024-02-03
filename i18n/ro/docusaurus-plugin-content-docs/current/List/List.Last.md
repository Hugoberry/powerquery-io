---
title: List.Last
---

# List.Last


## Description

Returnează ultima valoare a listei sau valoarea implicită specificată dacă este necompletată.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Returnează ultimul element din lista <code>list</code> sau valoarea implicită opţională, <code>defaultValue</code>, dacă lista este necompletată.    Dacă lista este necompletată şi nu se specifică o valoare implicită, funcţia returnează <code>null</code>.


## Examples

### Example #1 
Aflaţi ultima valoare din lista \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Aflaţi ultima valoare din lista \{} sau -1 dacă este necompletată.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
