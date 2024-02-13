---
title: Uri.Parts
---

# Uri.Parts


Returnerar delarna av den absoluta URI:n i angivna indata som en post.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

Returnerar delarna av <code>absoluteUri</code> i angivna indata som en post, som innehåller värden som Scheme, Host, Port, Path, Query, Fragment, UserName och Password.


## Examples

### Example #1 
Hitta delarna i den absoluta URI:n &#34;www.adventure-works.com&#34;.
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
Avkoda en procentkodad sträng.
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
