---
title: Text.Range
---

# Text.Range


Palauttaa siirtymästä löytyvän alimerkkijonon.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Palauttaa siirtymästä `text` löytyvän tekstin `offset` alimerkkijonon. Valinnainen parametri `count` voidaan sisällyttää määrittämään palautettavien merkkien määrä. Aiheuttaa virheen, jos merkkejä ei ole tarpeeksi.


## Examples

### Example #1
Etsi indeksistä 6 alkava alimerkkijono tekstistä "Hello World".
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Etsi indeksistä 6 alkava viiden merkin pituinen alimerkkijono tekstistä "Hello World Hello".
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
