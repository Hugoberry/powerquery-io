---
title: Uri.Parts
---

# Uri.Parts


## Description

Retourneert de onderdelen van de absolute URI van de invoer als een record.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Retourneert de onderdelen van de invoer <code>absoluteUri</code> als een record, met waarden zoals schema, host, poort, pad, query, fragment, gebruikersnaam en wachtwoord.


## Examples

### Example #1 
De onderdelen vinden van de absolute URI &#34;www.adventure-works.com&#34;.
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
