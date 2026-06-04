---
title: List.IsDistinct
---

# List.IsDistinct


Označuje, ali so na seznamu dvojniki.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Vrne logično vrednost, če so dvojniki na seznamu `list`; `true`, če je seznam razlikovalen, `false`, če so vrednosti podvojene.


## Examples

### Example #1
Ugotovite, ali je seznam \{1, 2, 3\} razlikovalen (tj. brez dvojnikov).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2
Ugotovite, ali je seznam \{1, 2, 3, 3\} razlikovalen (tj. brez dvojnikov).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
