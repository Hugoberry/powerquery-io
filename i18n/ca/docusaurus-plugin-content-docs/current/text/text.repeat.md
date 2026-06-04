---
title: Text.Repeat
---

# Text.Repeat


Retorna un valor de text format pel text d'entrada repetit un nombre de vegades especificat.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Retorna un valor de text format pel text d'entrada `text` repetit `count` vegades.


## Examples

### Example #1
Repeteix el text "a" cinc vegades.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Repeteix el text "helloworld" tres vegades.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
