---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Returnează o listă de valori text, divizate după oricare dintre caracterele din delimitator.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Returnează o listă de valori text care rezultă din divizarea unei valori text <code>text</code> în funcţie de orice caracter din delimitatorul specificat, <code>separators</code>.


## Examples

### Example #1 
Creaţi o listă din valoarea text „Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com”.
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
