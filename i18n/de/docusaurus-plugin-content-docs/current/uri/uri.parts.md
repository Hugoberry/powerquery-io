---
title: Uri.Parts
---

# Uri.Parts


Gibt die Teile des absoluten Eingabe-URI als Datensatz zurück.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

Gibt die Teile der Eingabe "`absoluteUri`" als Datensatz mit Werten wie Schema, Host, Port, Pfad, Abfrage, Fragment, Benutzername und Kennwort zurück.


## Examples

### Example #1
Ermittelt die Teile des absoluten URI "www.adventure-works.com".
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
Decodiert eine als Prozentwert codierte Zeichenfolge.
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
