---
title: Text.Select
---

# Text.Select


## Description

입력 텍스트 값에서 지정된 문자 또는 문자 목록의 모든 발생을 선택합니다.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

<code>selectChars</code>의 일부 문자를 제거하지 않은 상태로 텍스트 값 <code>text</code>의 복사본을 반환합니다.  


## Examples

### Example #1 
텍스트 값에서 &#39;a&#39;부터 &#39;z&#39; 사이에 있는 모든 문자를 선택합니다.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
