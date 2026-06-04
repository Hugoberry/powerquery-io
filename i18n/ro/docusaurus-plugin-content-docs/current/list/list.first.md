---
title: List.First
---

# List.First


Returnează prima valoare a listei sau valoarea implicită specificată dacă este necompletată.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Returnează primul element din lista `list` sau valoarea implicită opţională, `defaultValue`, dacă lista este necompletată. Dacă lista este necompletată şi nu se specifică o valoare implicită, funcţia returnează `null`.


## Examples

### Example #1
Aflaţi prima valoare din lista \{1, 2, 3\}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Aflaţi prima valoare din lista \{\}. Dacă lista este necompletată, se returnează -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
