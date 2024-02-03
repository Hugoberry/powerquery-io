---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

RFC 3986에 따라 특수 문자를 인코딩합니다.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

RFC 3986 규칙에 따라 <code>data</code> 입력의 특수 문자를 인코딩합니다.


## Examples

### Example #1 
&#34;+money$&#34;의 특수 문자를 인코딩합니다.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
