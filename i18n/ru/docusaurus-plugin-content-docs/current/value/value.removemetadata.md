---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Удаляет входные данные метаданных.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Удаляет входные данные метаданных.


## Examples

### Example #1
Удалить все метаданные из текстового значения.
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
Удалить только одно поле метаданных из текстового значения.
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
