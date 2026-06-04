---
title: Uri.Parts
---

# Uri.Parts


Ievades absolūtā URI daļas tiek atgrieztas kā ieraksts.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

Ievades `absoluteUri` daļas tiek atgrieztas kā ieraksts, kas ietver tādas vērtības kā Scheme, Host, Port, Path, Query, Fragment, UserName un Password.


## Examples

### Example #1
Atrodiet absolūtā URI "www.adventure-works.com" daļas.
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
Dekodējiet procentuāli kodētu virkni.
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
