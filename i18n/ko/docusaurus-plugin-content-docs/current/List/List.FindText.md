---
title: List.FindText
---

# List.FindText


## Description

지정된 텍스트가 포함된 값(레코드 필드 포함)의 목록을 반환합니다.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

<code>list</code> 목록에서 <code>text</code> 값이 포함된 값으로 구성된 목록을 반환합니다.


## Examples

### Example #1 
\{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} 목록에서 &#34;a&#34;와 일치하는 텍스트 값을 찾습니다. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
