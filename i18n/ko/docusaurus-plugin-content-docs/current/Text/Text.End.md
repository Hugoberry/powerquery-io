---
title: Text.End
---

# Text.End


## Description

텍스트의 마지막 문자를 반환합니다.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

<code>text</code> 값 <code>text</code>의 마지막 <code>count</code>자인 <code>text</code> 값을 반환합니다.


## Examples

### Example #1 
&#34;Hello, World&#34; 텍스트의 마지막 5자를 가져옵니다.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
