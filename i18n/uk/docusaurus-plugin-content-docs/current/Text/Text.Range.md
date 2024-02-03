---
title: Text.Range
---

# Text.Range


## Description

Повертає підрядок, знайдений зі зсувом.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Повертає підрядок тексту "<code>text</code>", знайдений зі зсувом <code>offset</code>.    Можна включити додатковий параметр <code>count</code>, щоб указати, скільки символів слід повернути. Якщо символів замало, повертається помилка.


## Examples

### Example #1 
Знайти підрядок тексту &#34;Hello World&#34;, що починається за індексом 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Знайти підрядок тексту &#34;Hello World&#34;, що починається за індексом 6 і охоплює 5 символів.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
