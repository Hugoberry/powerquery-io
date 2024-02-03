---
title: Text.Middle
---

# Text.Middle


## Description

Повертає підрядок з указаним обмеженням довжини.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Повертає зі зсувом <code>start</code> зазначену кількість (<code>count</code>) або решту символів до кінця тексту "<code>text</code>".


## Examples

### Example #1 
Знаходить підрядок тексту &#34;Hello World&#34; довжиною 5 символів, починаючи з індексу 6.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Знаходить підрядок тексту &#34;Hello World&#34;, починаючи з індексу 6 і до кінця.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
