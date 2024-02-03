---
title: Text.SplitAny
---

# Text.SplitAny


## Description

구문 기호에 있는 모든 문자를 기준으로 분할된 텍스트 값 목록을 반환합니다.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

지정된 구분 기호 <code>separators</code>에 있는 모든 문자를 기준으로 텍스트 값 <code>text</code>을(를) 분할하여 만든 텍스트 값 목록을 반환합니다.


## Examples

### Example #1 
텍스트 값 &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;에서 목록을 만듭니다.
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
