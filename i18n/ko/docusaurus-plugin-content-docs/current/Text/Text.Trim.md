---
title: Text.Trim
---

# Text.Trim


## Description

선행 및 후행 공백을 모두 제거합니다.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

텍스트 값 <code>text</code>에서 선행 및 후행 공백을 모두 제거한 결과를 반환합니다.


## Examples

### Example #1 
&#34;     a b c d    &#34;에서 선행 및 후행 공백을 제거합니다.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
