---
title: List.Combine
---

# List.Combine


Birden çok listeyi birleştirerek tek bir liste döndürür.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Remarks

<code>lists</code> liste listesini alır ve tek bir yeni liste olarak birleştirir.


## Examples

### Example #1 
\{1, 2} ve \{3, 4} basit listelerini birleştirir.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
Biri iç içe yerleştirilmiş liste içeren \{1, 2} ve \{3, \{4, 5}} listelerini birleştirir.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
