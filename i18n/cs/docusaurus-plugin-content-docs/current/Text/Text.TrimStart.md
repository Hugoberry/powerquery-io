---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Odebere všechny úvodní mezery.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Vrátí výsledek odebrání všech úvodních mezer z textové hodnoty <code>text</code>.


## Examples

### Example #1 
Odebere úvodní mezery z hodnoty „     a b c d    “.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
