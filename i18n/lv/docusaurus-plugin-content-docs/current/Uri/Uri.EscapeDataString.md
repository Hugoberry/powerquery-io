---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Kodē speciālās rakstzīmes saskaņā ar RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Kodē speciālās rakstzīmes ievadē <code>data</code> saskaņā ar RFC 3986 noteikumiem.


## Examples

### Example #1 
Kodējiet &#34;+money$&#34; speciālās rakstzīmes.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
