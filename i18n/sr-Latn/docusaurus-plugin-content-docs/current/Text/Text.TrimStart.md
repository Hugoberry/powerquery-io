---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Uklanja sve razmake s početka.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Vraća rezultat uklanjanja svih razmaka s početka tekstualne vrednosti <code>text</code>.


## Examples

### Example #1 
Uklanja sve razmake s početka vrednosti „     a b c d    “.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
