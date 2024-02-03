---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Повертає функцію, яка об’єднує список тексту за допомогою вказаних позицій вихідних даних.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Повертає функцію, яка об’єднує список текстових значень в одне текстове значення за допомогою вказаних позицій вихідних даних.


## Examples

### Example #1 
Об’єднайте список текстових значень, розмістивши їх у вихідних даних в указаних позиціях.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
