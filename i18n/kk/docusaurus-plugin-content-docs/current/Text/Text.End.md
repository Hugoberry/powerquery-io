---
title: Text.End
---

# Text.End


## Description

Мәтіннің соңғы таңбаларын қайтарады.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

<code>text</code> <code>text</code> мәнінің соңғы <code>count</code> таңбасы болып табылатын <code>text</code> мәнін қайтарады.


## Examples

### Example #1 
&#34;Hello, World&#34; мәтінінің соңғы 5 таңбасын алу.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
