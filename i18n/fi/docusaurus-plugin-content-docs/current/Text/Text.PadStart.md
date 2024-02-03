---
title: Text.PadStart
---

# Text.PadStart


## Description

Palauttaa määritetyn pituisen tekstin täyttämällä annetun tekstin alun.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Palauttaa <code>text</code>-arvon täytettynä pituuteen <code>count</code> lisäämällä välilyöntejä tekstiarvon <code>text</code> alkuun.    Valinnaisen merkin <code>character</code> avulla voidaan määrittää täyttämiseen käytetty merkki. Oletusarvon mukainen täyttömerkki on välilyönti.


## Examples

### Example #1 
Täytä tekstiarvon alku niin, että pituus on yhteensä 10 merkkiä.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2 
Täytä tekstiarvon alku merkillä | niin, että pituus on yhteensä 10 merkkiä.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
