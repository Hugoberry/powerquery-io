---
title: Text.ToList
---

# Text.ToList


## Description

지정된 텍스트 값에서 문자 값 목록을 반환합니다.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

지정된 텍스트 값 <code>text</code>에서 문자 값 목록을 반환합니다.


## Examples

### Example #1 
텍스트 &#34;Hello World&#34;에서 문자 값 목록을 만듭니다.
```powerquery
Text.ToList("Hello World")
```

Result: 
```powerquery
{
    "H",
    "e",
    "l",
    "l",
    "o",
    " ",
    "W",
    "o",
    "r",
    "l",
    "d"
}
```




## Category
Text.Conversions from and to text
