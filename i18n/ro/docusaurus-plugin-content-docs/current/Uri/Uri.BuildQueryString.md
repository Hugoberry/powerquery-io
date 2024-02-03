---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Asamblați o înregistrare într-un șir de interogare URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Asamblați înregistrarea <code>query</code> într-un șir de interogare URI, aplicând escape pentru caractere dacă este necesar.


## Examples

### Example #1 
Codificați un șir de interogare care conține unele caractere speciale.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
