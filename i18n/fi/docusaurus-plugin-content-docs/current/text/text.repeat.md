---
title: Text.Repeat
---

# Text.Repeat


Palauttaa tekstiarvon, joka muodostuu määritetyn määrän kertoja toistetusta syötetekstistä.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Palauttaa tekstiarvon, joka muodostuu `count` kertaa toistetusta syötetekstistä `text`.


## Examples

### Example #1
Toista teksti "a" viidesti.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Toista teksti "helloworld" kolmesti.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
