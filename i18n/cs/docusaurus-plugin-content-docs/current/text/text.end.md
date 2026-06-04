---
title: Text.End
---

# Text.End


Vrátí poslední znaky textu.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Vrátí `text`ovou hodnotu, která představuje poslední znaky (počet: `count`) `text`ové hodnoty `text`.


## Examples

### Example #1
Získá posledních 5 znaků textu „Hello, World“.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
