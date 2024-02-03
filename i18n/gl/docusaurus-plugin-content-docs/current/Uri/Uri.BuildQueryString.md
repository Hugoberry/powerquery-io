---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Ensamble un rexistro nunha cadea de consulta de URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Ensamble o rexistro <code>query</code> nunha cadea de consulta de URI, evitando caracteres segundo resulte necesario.


## Examples

### Example #1 
Codifique unha cadea de consulta que conteña varios caracteres especiais.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
