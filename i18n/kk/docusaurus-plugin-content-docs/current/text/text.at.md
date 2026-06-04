---
title: Text.At
---

# Text.At


Көрсетілген орындағы таңбаны қайтарады.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

`text` мәтіндік мәніндегі `index` орнындағы таңбаны қайтарады. Мәтіндегі бірінші таңба 0 орнында болады.


## Examples

### Example #1
"Hello, World" жолында 4 орнындағы таңбаны анықтау.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
