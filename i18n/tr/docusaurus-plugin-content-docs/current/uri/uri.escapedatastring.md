---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Özel karakterleri RFC 3986 kurallarına göre kodlar.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

`data` girişindeki özel karakterleri RFC 3986 kurallarına göre kodlar.


## Examples

### Example #1
"+money$" içindeki özel karakterleri kodlayın.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
