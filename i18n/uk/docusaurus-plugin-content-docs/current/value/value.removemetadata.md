---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Смуги вводу метаданих.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Смуги вводу метаданих.


## Examples

### Example #1
Вилучіть всі метадані з текстового значення.
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
Вилучіть лише одне поле метаданих із текстового значення.
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
