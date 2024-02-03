---
title: Text.Trim
---

# Text.Trim


## Description

Uklanja sve razmake s početka i kraja.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Vraća rezultat uklanjanja svih razmaka s početka i kraja tekstualne vrednosti <code>text</code>.


## Examples

### Example #1 
Uklanja sve razmake s početka i kraja vrednosti „     a b c d    “.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
