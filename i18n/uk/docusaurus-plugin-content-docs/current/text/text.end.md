---
title: Text.End
---

# Text.End


Повертає останні символи тексту.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Повертає значення `text`, яке є останніми `count` символами значення `text` `text`.


## Examples

### Example #1
Отримати 5 останніх символів тексту "Hello, World".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
