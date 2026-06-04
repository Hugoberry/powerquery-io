---
title: List.Last
---

# List.Last


Returnează ultima valoare a listei sau valoarea implicită specificată dacă este necompletată.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Returnează ultimul element din lista specificată sau valoarea implicită opțională dacă lista este goală.

-   `list`: Lista de examinat.
-   `defaultValue`: (Opțional) Valoarea de returnat dacă lista este goală. Dacă lista este goală și nu se specifică o valoare implicită, funcția returnează `null`.


## Examples

### Example #1
Aflaţi ultima valoare din lista \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Aflaţi ultima valoare din lista \{\} sau -1 dacă este necompletată.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
