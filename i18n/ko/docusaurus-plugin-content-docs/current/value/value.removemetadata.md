---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


입력에서 메타데이터를 제거합니다.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

입력에서 메타데이터를 제거합니다.


## Examples

### Example #1
텍스트 값에서 모든 메타데이터를 제거합니다.
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
텍스트 값에서 메타데이터 필드를 하나만 제거합니다.
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
