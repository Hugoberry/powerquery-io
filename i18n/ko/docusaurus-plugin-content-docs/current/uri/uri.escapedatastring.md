---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


RFC 3986에 따라 특수 문자를 인코딩합니다.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

RFC 3986 규칙에 따라 `data` 입력의 특수 문자를 인코딩합니다.


## Examples

### Example #1
"+money$"의 특수 문자를 인코딩합니다.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
