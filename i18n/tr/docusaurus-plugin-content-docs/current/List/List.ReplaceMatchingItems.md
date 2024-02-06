---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Her \{ old, new } değişimini uygular.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

<code>list</code> listesine verilen değişiklikleri uygular. <code>replacements</code> değiştirme işlemi bir listede sağlanan eski ve yeni değer olmak üzere iki değer içeren bir listeden oluşur.    Eşitlik sınamasını denetlemek için <code>equationCriteria</code> isteğe bağlı eşitlik ölçüt değeri belirtilebilir.


## Examples

### Example #1 
\{1, 2, 3, 4, 5} listesinden 5 değerini -5, 1 değerini -1 ile değiştirerek bir liste oluşturur.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
