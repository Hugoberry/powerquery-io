---
title: Text.Repeat
---

# Text.Repeat


## Description

Palauttaa tekstiarvon, joka muodostuu määritetyn määrän kertoja toistetusta syötetekstistä.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Palauttaa tekstiarvon, joka muodostuu <code>count</code> kertaa toistetusta syötetekstistä <code>text</code>.


## Examples

### Example #1 
Toista teksti &#34;a&#34; viidesti.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Toista teksti &#34;helloworld&#34; kolmesti.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
