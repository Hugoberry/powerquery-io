---
title: Text.End
---

# Text.End


Palauttaa tekstin viimeiset merkit.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Palauttaa `text`\-arvon, joka on `text`\-arvon `text` viimeiset `count` merkkiä.


## Examples

### Example #1
Hae tekstin "Hello, World" viimeiset viisi merkkiä.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
