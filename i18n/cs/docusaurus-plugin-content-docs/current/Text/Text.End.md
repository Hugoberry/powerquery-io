---
title: Text.End
---

# Text.End


## Description

Vrátí poslední znaky textu.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Vrátí <code>text</code>ovou hodnotu, která představuje poslední znaky (počet: <code>count</code>) <code>text</code>ové hodnoty <code>text</code>.


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
