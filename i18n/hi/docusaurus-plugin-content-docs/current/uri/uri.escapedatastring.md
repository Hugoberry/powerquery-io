---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


RFC 3986 के अनुसार विशेष वर्णों को एन्कोड करता है.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

RFC 3986 के नियमों के अनुसार इनपुट `data` में विशेष वर्णों को एन्कोड करता है.


## Examples

### Example #1
"+money$" में विशेष वर्णों को एन्कोड करें.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
