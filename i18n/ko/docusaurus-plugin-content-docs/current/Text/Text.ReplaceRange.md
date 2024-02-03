---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

특정 범위의 문자를 제거하고 지정된 위치에 새 값을 삽입합니다.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Details

위치 <code>offset</code>에서 시작하여 텍스트 값 <code>text</code>에서 여러 문자 <code>count</code>을(를) 제거한 다음 <code>text</code>의 같은 위치에 텍스트 값 <code>newText</code>을(를) 삽입한 결과를 반환합니다.


## Examples

### Example #1 
텍스트 값 &#34;ABGF&#34;의 위치 2에 있는 단일 문자를 새 텍스트 값 &#34;CDE&#34;로 바꿉니다.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
