---
title: Text.PadEnd
---

# Text.PadEnd


Palauttaa määritetyn pituisen tekstin täyttämällä annetun tekstin lopun.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Palauttaa `text`\-arvon täytettynä pituuteen `count` lisäämällä välilyöntejä tekstiarvon `text` loppuun. Valinnaisen merkin `character` avulla voidaan määrittää täyttämiseen käytetty merkki. Oletusarvon mukainen täyttömerkki on välilyönti.


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
