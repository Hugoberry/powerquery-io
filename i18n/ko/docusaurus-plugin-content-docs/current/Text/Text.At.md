---
title: Text.At
---

# Text.At


## Description

지정한 위치에 있는 문자를 반환합니다.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

<code>index</code> 위치에 있는 텍스트 값 <code>text</code>의 문자를 반환합니다. 텍스트의 첫 번째 문자는 위치 0에 있습니다.


## Examples

### Example #1 
&#34;Hello, World&#34; 문자열에서 위치 4에 있는 문자를 찾습니다.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
