---
title: Text.Repeat
---

# Text.Repeat


Возвращает текстовое значение, состоящее из входного текста, повторенного указанное число раз.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Возвращает текстовое значение, состоящее из входного текста `text`, повторенного `count` раз.


## Examples

### Example #1
Повторить текст "a" 5 раз.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Повторить текст "helloworld" три раза.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
