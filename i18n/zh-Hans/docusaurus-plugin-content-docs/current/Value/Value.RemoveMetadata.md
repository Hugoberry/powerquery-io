---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


提取元数据的输入。


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

提取元数据的输入。


## Examples

### Example #1
从文本值中移除所有元数据。
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
仅从文本值中移除一个字段的元数据。
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
