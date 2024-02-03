---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Kokoa tietue URI-kyselymerkkijonoksi.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Kokoa tietue <code>query</code> URI-kyselymerkkijonoksi ja lisää ohjausmerkkejä tarvittaessa.


## Examples

### Example #1 
Koodaa kyselymerkkijono, joka sisältää joitakin erikoismerkkejä.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
