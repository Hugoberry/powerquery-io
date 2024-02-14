---
title: Uri.Parts
---

# Uri.Parts


Devuelve las partes del URI absoluto de entrada como un registro.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

Devuelve las partes del <code>absoluteUri</code> de entrada como un registro, con valores como el esquema, el host, el puerto, la ruta de acceso, la consulta, el fragmento, el nombre de usuario y una contraseña.


## Examples

### Example #1 
Buscar las partes del URI absoluto “www.adventure-works.com”.
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
Descodifica una cadena codificada por porcentaje.
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
