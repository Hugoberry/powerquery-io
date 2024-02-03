---
title: Text.At
---

# Text.At


## Description

Көрсетілген орындағы таңбаны қайтарады.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

<code>text</code> мәтіндік мәніндегі <code>index</code> орнындағы таңбаны қайтарады. Мәтіндегі бірінші таңба 0 орнында болады.


## Examples

### Example #1 
&#34;Hello, World&#34; жолында 4 орнындағы таңбаны анықтау.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
