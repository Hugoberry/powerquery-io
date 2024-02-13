---
title: Uri.Parts
---

# Uri.Parts


Zwraca części wejściowego bezwzględnego identyfikatora URI jako rekord.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

Zwraca części wejściowego identyfikatora <code>absoluteUri</code> jako rekord zawierający wartości, takie jak Scheme, Host, Port, Path, Query, Fragment, UserName i Password.


## Examples

### Example #1 
Znajdź części bezwzględnego identyfikatora URI „www.adventure-works.com”.
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
Zdekoduj ciąg zakodowany przy użyciu znaków procentu.
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
