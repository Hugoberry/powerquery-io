---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Apvienojiet ierakstu URI vaicājuma virknē.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Apvienojiet ierakstu <code>query</code> URI vaicājuma virknē, veidojot atsoļa rakstzīmes, kad nepieciešams.


## Examples

### Example #1 
Kodējiet vaicājuma virkni, kurā ietvertas speciālās rakstzīmes.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
