---
title: Uri.Parts
---

# Uri.Parts


Returns the parts of the input absolute URI as a record.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

Returns the parts of the input <code>absoluteUri</code> as a record, containing values such as Scheme, Host, Port, Path, Query, Fragment, UserName and Password.


## Examples

### Example #1 
Find the parts of the absolute URI &#34;www.adventure-works.com&#34;.
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
Decode a percent-encoded string.
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
