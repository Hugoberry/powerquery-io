---
title: Text.Start
---

# Text.Start


## Description

Мәтіннің басын қайтарады.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

<code>text</code> бірінші <code>count</code> таңбасын мәтіндік мән ретінде қайтарады.


## Examples

### Example #1 
&#34;Сәлем, Әлем&#34; мәтінінің бірінші 5 таңбасын алу.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
