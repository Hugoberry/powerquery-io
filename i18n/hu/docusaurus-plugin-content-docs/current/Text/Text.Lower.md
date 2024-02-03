---
title: Text.Lower
---

# Text.Lower


## Description

Kisbetűssé alakítja az összes karaktert.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

A <code>text</code> értékben levő összes karakter kisbetűssé alakításával előállított eredményt adja vissza. Egy nem kötelező <code>culture</code> is megadható (például „en-US”).


## Examples

### Example #1 
Kisbetűssé alakítja az „AbCd” karakterláncot.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
