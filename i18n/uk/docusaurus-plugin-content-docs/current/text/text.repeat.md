---
title: Text.Repeat
---

# Text.Repeat


Повертає текстове значення, складене із заданої кількості повторювань вхідного тексту.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Повертає текстове значення, складене з `count` повторювань вхідного тексту `text`.


## Examples

### Example #1
Повторити текст "a" п'ять разів.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Повторити текст "helloworld" тричі.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
