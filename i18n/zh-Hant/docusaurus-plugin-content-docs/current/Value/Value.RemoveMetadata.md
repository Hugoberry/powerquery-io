---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


移除中繼資料的輸入。


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

移除中繼資料的輸入。


## Examples

### Example #1
從文字值移除所有中繼資料。
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
只從文字值中移除一個中繼資料欄位。
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
