---
title: Text.Repeat
---

# Text.Repeat


Pateikiama tekstinė reikšmė, sudaryta iš įvesties teksto, kartojamo nurodytą kartų skaičių.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Pateikiama tekstinė reikšmė, sudaryta iš įvesties teksto `text`, kartojamo `count` kart.


## Examples

### Example #1
Kartokite tekstą „a“ penkis kartus.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Kartokite tekstą „helloworld“ tris kartus.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
