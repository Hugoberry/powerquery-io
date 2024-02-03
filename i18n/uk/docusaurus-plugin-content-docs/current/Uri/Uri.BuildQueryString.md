---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Складання запису в рядок запита URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Складання запису <code>query</code> в рядок запиту URI з екрануванням символів (за необхідності).


## Examples

### Example #1 
Кодування рядка запита, що містить деякі спеціальні символи.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
