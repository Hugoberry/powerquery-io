---
title: Text.Upper
---

# Text.Upper


## Description

Nagybetűssé alakítja az összes karaktert.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

A <code>text</code> értékben levő összes karakter nagybetűssé alakításával előállított eredményt adja vissza. Egy nem kötelező <code>culture</code> is megadható (például „en-US”).


## Examples

### Example #1 
Az „aBcD” karakterlánc nagybetűssé alakítása
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
