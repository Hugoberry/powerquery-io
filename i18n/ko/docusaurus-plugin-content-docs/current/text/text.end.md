---
title: Text.End
---

# Text.End


텍스트의 마지막 문자를 반환합니다.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

`text` 값 `text`의 마지막 `count`자인 `text` 값을 반환합니다.


## Examples

### Example #1
"Hello, World" 텍스트의 마지막 5자를 가져옵니다.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
