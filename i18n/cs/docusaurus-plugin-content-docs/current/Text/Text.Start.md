---
title: Text.Start
---

# Text.Start


## Description

Vrátí začátek textu.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Vrátí prvních <code>count</code> znaků hodnoty <code>text</code> jako textovou hodnotu.


## Examples

### Example #1 
Vrátí prvních 5 znaků řetězce „Hello, World“.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
