---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Uklanja sve razmake s kraja.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Vraća rezultat uklanjanja svih razmaka s kraja tekstualne vrednosti <code>text</code>.


## Examples

### Example #1 
Uklanja sve razmake s kraja vrednosti „     a b c d    “.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
