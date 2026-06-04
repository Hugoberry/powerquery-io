---
title: Logical.ToText
---

# Logical.ToText


지정된 논리값에 따라 텍스트 "true" 또는 "false"를 반환합니다.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

논리값 `logicalValue`(`true` 또는 `false`)에서 텍스트 값을 만듭니다. `logicalValue`이(가) 논리 값이 아니면 오류가 발생합니다.


## Examples

### Example #1
논리값 `true`에서 텍스트 값을 만듭니다.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
