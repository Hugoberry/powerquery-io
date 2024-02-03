---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

Вилучає діапазон символів і вставляє нове значення в певне положення.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Details

Повертає результат вилучення кількості символів, <code>count</code>, з текстового значення <code>text</code>, що починається з положення <code>offset</code>, і вставлення текстового значення <code>newText</code> у те ж положення в <code>text</code>.


## Examples

### Example #1 
Замінити один символ у положенні 2 текстового значення &#34;ABGF&#34; на нове текстове значення &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
