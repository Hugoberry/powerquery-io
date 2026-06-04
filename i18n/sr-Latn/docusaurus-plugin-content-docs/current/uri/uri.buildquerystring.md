---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Sastavite zapis u URI nisku upita.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

Sastavite zapis `query` u URI nisku zapisa, izbegavajući znakove po potrebi.


## Examples

### Example #1
Kodirajte nisku upita koja sadrži neke specijalne znakove.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
