---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Datensatz als URI-Abfragezeichenfolge zusammenstellen.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Stellen Sie den Datensatz '<code>query</code>' als URI-Abfragezeichenfolge zusammen, und kommentieren Sie Zeichen dabei wie erforderlich aus.


## Examples

### Example #1 
Kodieren einer Abfragezeichenfolge, die Sonderzeichen enthält.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
