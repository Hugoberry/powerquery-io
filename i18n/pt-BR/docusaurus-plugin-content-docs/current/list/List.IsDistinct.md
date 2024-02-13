---
title: List.IsDistinct
---

# List.IsDistinct


Indica se há duplicatas na lista.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Retorna um valor lógico se houver duplicatas na lista <code>list</code>. <code>true</code> será retornado se a lista for distinta; <code>false</code> será retornado se houver valores duplicados. 


## Examples

### Example #1 
Descubra se a lista \{1, 2, 3} é distinta (por exemplo, se não há duplicatas).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Descubra se a lista \{1, 2, 3, 3} é distinta (por exemplo, se não há duplicatas).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
