---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


メタデータの入力を削除します。


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

メタデータの入力を削除します。


## Examples

### Example #1
テキスト値からすべてのメタデータを削除します。
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
テキスト値からメタデータのフィールドを 1 つだけ削除します。
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
