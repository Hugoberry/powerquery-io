---
title: Text.Clean
---

# Text.Clean


## Description

Барлық басқарушы таңбалары жойылған мәтіндік мәнді қайтарады.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

<code>text</code> барлық басқарушы таңбалары жойылған мәтіндік мәнді қайтарады.


## Examples

### Example #1 
Мәтіндік мәннен жолға түсулерді және басқа басқарушы таңбаларды жою.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
