---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Palauttaa määritetyn pituisen tekstin täyttämällä annetun tekstin lopun.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Palauttaa <code>text</code>-arvon täytettynä pituuteen <code>count</code> lisäämällä välilyöntejä tekstiarvon <code>text</code> loppuun.    Valinnaisen merkin <code>character</code> avulla voidaan määrittää täyttämiseen käytetty merkki. Oletusarvon mukainen täyttömerkki on välilyönti.


## Examples

### Example #1 
Täytä tekstiarvon loppu niin, että pituus on yhteensä 10 merkkiä.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
Täytä tekstiarvon loppu merkillä | niin, että pituus on yhteensä 10 merkkiä.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
