---
title: Text.End
---

# Text.End


## Description

Повертає останні символи тексту.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Повертає значення <code>text</code>, яке є останніми <code>count</code> символами значення <code>text</code> <code>text</code>.


## Examples

### Example #1 
Отримати 5 останніх символів тексту &#34;Hello, World&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
