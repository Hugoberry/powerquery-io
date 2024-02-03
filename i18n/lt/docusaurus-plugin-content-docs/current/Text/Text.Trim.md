---
title: Text.Trim
---

# Text.Trim


## Description

Pašalinami visi tarpai priekyje ir gale.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Pateikiamas visų tarpų priekyje ir gale pašalinimo iš tekstinės reikšmės <code>text</code> rezultatas.


## Examples

### Example #1 
Pašalinkite tarpą priekyje ir gale iš „     a b c d    “.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
