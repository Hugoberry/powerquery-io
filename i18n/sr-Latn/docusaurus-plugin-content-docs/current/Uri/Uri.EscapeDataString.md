---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Kodira specijalne znakove u skladu sa standardom RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Kodira specijalne znakove u unosu <code>data</code> u skladu sa pravilima standarda RFC 3986.


## Examples

### Example #1 
Kodira specijalne znakove u okviru &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
