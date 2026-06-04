---
title: Text.Middle
---

# Text.Middle


Palauttaa alimerkkijonon määritettyyn pituuteen saakka.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Palauttaa `count` merkkiä tai kohteen `text` loppuun saakka; siirtymä `start`.


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


### Example #3
Etsi alimerkkijono tekstistä Hello World alkaen indeksistä 0 ja käsittäen 2 merkkiä.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
