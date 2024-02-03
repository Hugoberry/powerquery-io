---
title: Text.Middle
---

# Text.Middle


## Description

Palauttaa alimerkkijonon määritettyyn pituuteen saakka.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Palauttaa <code>count</code> merkkiä tai kohteen <code>text</code> loppuun saakka; siirtymä <code>start</code>.


## Examples

### Example #1 
Etsi alimerkkijono tekstistä Hello World alkaen indeksistä 6 ja käsittäen 5 merkkiä.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Etsi alimerkkijono tekstistä Hello World alkaen indeksistä 6 loppuun saakka.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
