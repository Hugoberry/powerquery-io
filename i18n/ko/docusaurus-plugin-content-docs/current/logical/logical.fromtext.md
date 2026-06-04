---
title: Logical.FromText
---

# Logical.FromText


텍스트 값 "true" 및 "false"에서 logical 값을 만듭니다.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

텍스트 값 `text`("true" 또는 "false")에서 logical 값을 만듭니다. `text`이(가) 다른 문자열을 포함하는 경우 오류가 발생합니다. 텍스트 값 `text`은(는) 대/소문자를 구분하지 않습니다.


## Examples

### Example #1
텍스트 문자열 "true"에서 logical 값을 만듭니다.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
텍스트 문자열 "a"에서 logical 값을 만듭니다.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
