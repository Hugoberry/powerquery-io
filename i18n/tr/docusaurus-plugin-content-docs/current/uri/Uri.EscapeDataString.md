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

<code>data</code> girişindeki özel karakterleri RFC 3986 kurallarına göre kodlar.


## Examples

### Example #1 
&#34;+money$&#34; içindeki özel karakterleri kodlayın.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
