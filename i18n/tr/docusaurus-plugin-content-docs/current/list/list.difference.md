---
title: List.Difference
---

# List.Difference


Verilen iki listenin farkını döndürür.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

<code>list1</code> listesindeki <code>list2</code> listesinde görünmeyen öğeleri döndürür. Yinelenen değerler desteklenir.    Eşitlik sınamasını denetlemek için <code>equationCriteria</code> isteğe bağlı denklem ölçüt değeri belirtilebilir. 


## Examples

### Example #1 
\{1, 2, 3, 4, 5} listesinde yer alan ve \{4, 5, 3} listesinde görünmeyen öğeleri bulur.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
\{1, 2} listesindeki \{1, 2, 3} listesinde görünmeyen öğeleri bulur.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
