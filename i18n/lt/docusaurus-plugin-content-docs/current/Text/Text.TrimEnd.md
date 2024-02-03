---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Pašalinami visi tarpai gale.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Pateikiamas visų tarpų gale pašalinimo iš tekstinės reikšmės <code>text</code> rezultatas.


## Examples

### Example #1 
Pašalinkite tarpą gale iš „     a b c d    “.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
