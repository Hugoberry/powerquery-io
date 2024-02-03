---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Pašalinami visi tarpai priekyje.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Pateikiamas visų tarpų priekyje pašalinimo iš tekstinės reikšmės <code>text</code> rezultatas.


## Examples

### Example #1 
Pašalinkite tarpą priekyje iš „     a b c d    “.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
