---
title: Text.Split
---

# Text.Split


## Description

지정된 구분 기호를 사용하여 텍스트를 텍스트 값 목록으로 분할합니다.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

지정된 구분 기호 <code>separator</code>을(를) 기준으로 텍스트 값 <code>text</code>을(를) 분할하여 만든 텍스트 값 목록을 반환합니다.


## Examples

### Example #1 
텍스트 값 &#34;Name|Address|PhoneNumber&#34;를 &#34;|&#34;로 구분하여 목록을 만듭니다.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```




## Category
Text.Transformations
