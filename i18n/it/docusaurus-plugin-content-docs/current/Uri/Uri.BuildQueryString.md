---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Assemblare un record in una stringa di query URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

Assemblare il record <code>query</code> in una stringa di query URI, usando i caratteri di escape appropriati.


## Examples

### Example #1 
Codificare una stringa di query contenente caratteri speciali.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
