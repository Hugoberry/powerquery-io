---
title: Uri.Parts
---

# Uri.Parts


Retourneert de onderdelen van de absolute URI van de invoer als een record.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

Retourneert de onderdelen van de invoer `absoluteUri` als een record, met waarden zoals schema, host, poort, pad, query, fragment, gebruikersnaam en wachtwoord.


## Examples

### Example #1
De onderdelen vinden van de absolute URI "www.adventure-works.com".
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
Een tekenreeks met procentversleuteling ontsleutelen.
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
