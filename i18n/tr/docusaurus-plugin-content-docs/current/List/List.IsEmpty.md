---
title: List.IsEmpty
---

# List.IsEmpty


Liste boşsa, doğru değerini döndürür.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

<code>list</code> listesi değer içermiyorsa (uzunluk 0) <code>true</code> döndürür. Liste değer içeriyorsa (uzunluk > 0) <code>false</code> döndürür.


## Examples

### Example #1 
\{} listesinin boş olup olmadığını bulur.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2} listesinin boş olup olmadığını bulur.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
