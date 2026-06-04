---
title: Text.End
---

# Text.End


Мәтіннің соңғы таңбаларын қайтарады.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

`text` `text` мәнінің соңғы `count` таңбасы болып табылатын `text` мәнін қайтарады.


## Examples

### Example #1
"Hello, World" мәтінінің соңғы 5 таңбасын алу.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
