---
title: Uri.Parts
---

# Uri.Parts


## Description

Retourne les parties de l&#39;URI absolu d&#39;entrée en tant qu&#39;enregistrement.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Retourne les parties de l'<code>absoluteUri</code> d'entrée comme un enregistrement contenant des valeurs telles que le schéma, l'hôte, le port, le chemin d'accès, la requête, le fragment, le nom d'utilisateur et le mot de passe.


## Examples

### Example #1 
Recherche les parties de l&#39;URI absolu &#34; www.adventure-works.com &#34;.
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
Décodez une chaîne encodée en pourcentage.
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
