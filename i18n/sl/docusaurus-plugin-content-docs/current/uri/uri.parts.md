---
title: Uri.Parts
---

# Uri.Parts


Vrne dele vhodnega absolutnega URI-ja kot zapis.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

Vrne dele vnosa `absoluteUri` kot zapis, ki vsebuje vrednosti, kot so"Scheme","Host","Port","Path","Query","Fragment","UserName"in"Password".


## Examples

### Example #1
Poiščite dele absolutnega URI-ja"www.adventure-works.com".
```powerquery
Uri.Parts("www.adventure-works.com")
```

Result: 
```powerquery
[
    Scheme = "http",
    Host = "www.adventure-works.com",
    Port = 80,
    Path = "/",
    Query = [],
    Fragment = "",
    UserName = "",
    Password = ""
]
```


### Example #2
Dekodirajte niz, ki je kodiran z odstotkom.
```powerquery
let
    UriUnescapeDataString = (data as text) as text => Uri.Parts("http://contoso?a=" & data)[Query][a]
in
    UriUnescapeDataString("%2Bmoney%24")
```

Result: 
```powerquery
"+money$"
```




## Category
Uri
