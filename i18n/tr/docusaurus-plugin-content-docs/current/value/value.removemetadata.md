---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Girdideki meta verileri kaldırır.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Girdideki meta verileri kaldırır.


## Examples

### Example #1
Metin değerinden tüm meta verileri kaldırın.
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2])
)
```

Result: 
```powerquery
[]
```


### Example #2
Bir metin değerinden yalnızca bir meta veri alanını kaldırın.
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2], {"a"})
)
```

Result: 
```powerquery
[b = 2]
```




## Category
Metadata
