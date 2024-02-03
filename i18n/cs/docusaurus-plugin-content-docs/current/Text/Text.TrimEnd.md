---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Odebere všechny koncové mezery.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Vrátí výsledek odebrání všech koncových mezer z textové hodnoty <code>text</code>.


## Examples

### Example #1 
Odebere koncové mezery z hodnoty „     a b c d    “.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
