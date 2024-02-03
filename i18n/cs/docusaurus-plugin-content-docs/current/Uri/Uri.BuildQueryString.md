---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Sestavte záznam do řetězce dotazu URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Sestavte záznam <code>query</code> do řetězce dotazu URI, přičemž podle potřeby použijte uvozovací znaky.


## Examples

### Example #1 
Zakódujte řetězec dotazu, který obsahuje některé speciální znaky.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
