---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Assemblez un enregistrement dans une chaîne de requête URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Assemblez l'enregistrement <code>query</code> dans une chaîne de requête URI, en utilisant des caractères d'échappement si besoin.


## Examples

### Example #1 
Encodez une chaîne de requête qui contient des caractères spéciaux.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
