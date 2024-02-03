---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Kóduje speciální znaky podle RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Kóduje speciální znaky ve vstupu <code>data</code> podle pravidel RFC 3986.


## Examples

### Example #1 
Kóduje speciální znaky v řetězci &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
