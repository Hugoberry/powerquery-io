---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Sestavite zapis v niz poizvedbe URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Sestavite zapis <code>query</code> niz poizvedbe URI in po potrebi ustvarite ubežne znake.


## Examples

### Example #1 
Kodirajte niz poizvedbe, ki vsebuje nekaj posebnih znakov.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
