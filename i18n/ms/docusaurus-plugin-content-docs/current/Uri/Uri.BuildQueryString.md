---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Himpunkan rekod into rentetan pertanyaan URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Himpunkan rekod <code>query</code> ke dalam rentetan pertanyaan URI, aksara pelepasan jika diperlukan.


## Examples

### Example #1 
Kodkan rentetan pertanyaan yang mengandungi beberapa aksara khas.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
