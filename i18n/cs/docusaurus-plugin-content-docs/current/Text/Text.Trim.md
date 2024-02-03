---
title: Text.Trim
---

# Text.Trim


## Description

Odebere všechny úvodní a koncové mezery.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Vrátí výsledek odebrání všech úvodních a koncových mezer z textové hodnoty <code>text</code>.


## Examples

### Example #1 
Odebere úvodní a koncové mezery z hodnoty „     a b c d    “.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
