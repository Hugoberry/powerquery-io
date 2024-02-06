---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Een record samenvoegen in een URI-queryreeks.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

Voeg de record <code>query</code> samen in een URI-queryreeks, waarbij tekens zo nodig worden voorzien van escape-tekens.


## Examples

### Example #1 
Een queryreeks coderen die een aantal speciale tekens bevat.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
