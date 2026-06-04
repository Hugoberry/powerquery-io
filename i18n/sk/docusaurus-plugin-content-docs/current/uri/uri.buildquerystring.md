---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Zostavte záznam v reťazci dotazu identifikátora URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

Zostavte záznam `query` v reťazci dotazu identifikátora URI, znaky ukončenia podľa potreby.


## Examples

### Example #1
Vytvorte kódovanie reťazca dotazu so špeciálnymi znakmi.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
