---
title: Uri.Parts
---

# Uri.Parts


Кіріс абсолютті URI мекенжайының бөліктерін жазба ретінде қайтарады.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

`absoluteUri` кірісінің бөліктерін Scheme, Host, Port, Path, Query, Fragment, UserName және Password сияқты мәндерді қамтитын жазба ретінде қайтарады.


## Examples

### Example #1
"www.adventure-works.com" абсолютті URI мекенжайының бөліктерін анықтау.
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
Пайызбен кодталған жолдың кодын ашыңыз.
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
