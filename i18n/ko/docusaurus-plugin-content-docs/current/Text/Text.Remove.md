---
title: Text.Remove
---

# Text.Remove


## Description

입력 텍스트 값에서 지정된 문자 또는 문자 목록의 모든 발생을 제거합니다.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

<code>removeChars</code>의 모든 문자를 제거한 상태로 텍스트 값 <code>text</code>의 복사본을 반환합니다.  


## Examples

### Example #1 
텍스트 값에서 , 및 ; 문자를 제거합니다.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
