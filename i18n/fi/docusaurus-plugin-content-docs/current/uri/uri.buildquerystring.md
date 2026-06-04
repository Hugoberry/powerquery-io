---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Kokoa tietue URI-kyselymerkkijonoksi.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

Kokoa tietue `query` URI-kyselymerkkijonoksi ja lisää ohjausmerkkejä tarvittaessa.


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
