---
title: Text.Clean
---

# Text.Clean


## Description

제어 문자가 모두 제거된 텍스트 값을 반환합니다.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

<code>text</code>의 제어 문자가 모두 제거된 텍스트 값을 반환합니다.


## Examples

### Example #1 
텍스트 값에서 줄 바꿈 및 다른 제어 문자를 제거합니다.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
