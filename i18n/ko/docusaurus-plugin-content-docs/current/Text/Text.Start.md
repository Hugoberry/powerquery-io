---
title: Text.Start
---

# Text.Start


## Description

텍스트 시작을 반환합니다.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

<code>text</code>의 처음 <code>count</code>개 문자를 텍스트 값으로 반환합니다.


## Examples

### Example #1 
&#34;Hello, World&#34;의 처음 5개 문자를 가져옵니다.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
