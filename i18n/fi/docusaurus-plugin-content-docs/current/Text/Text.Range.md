---
title: Text.Range
---

# Text.Range


## Description

Palauttaa siirtymästä löytyvän alimerkkijonon.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Palauttaa siirtymästä <code>offset</code> löytyvän tekstin <code>text</code> alimerkkijonon.    Valinnainen parametri <code>count</code> voidaan sisällyttää määrittämään palautettavien merkkien määrä. Aiheuttaa virheen, jos merkkejä ei ole tarpeeksi.


## Examples

### Example #1 
Etsi indeksistä 6 alkava alimerkkijono tekstistä &#34;Hello World&#34;.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Etsi indeksistä 6 alkava viiden merkin pituinen alimerkkijono tekstistä &#34;Hello World Hello&#34;.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
