---
title: Text.From
---

# Text.From


## Description

지정된 값에서 텍스트 값을 만듭니다.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

<code>value</code>의 텍스트 표현을 반환합니다. <code>value</code>은(는) <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> 또는 <code>binary</code> 값일 수 있습니다.    지정된 값이 null이면 <code>Text.From</code>에서 null을 반환합니다. 선택적 <code>culture</code>(예: "en-US")이(가) 제공될 수도 있습니다.


## Examples

### Example #1 
숫자 3에서 텍스트 값을 만듭니다.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
