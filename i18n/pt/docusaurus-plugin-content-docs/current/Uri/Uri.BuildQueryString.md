---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Assemble a record into a URI query string.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Assemble the record <code>query</code> into a URI query string, escaping characters as necessary.


## Examples

### Example #1 
Encode a query string which contains some special characters.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
