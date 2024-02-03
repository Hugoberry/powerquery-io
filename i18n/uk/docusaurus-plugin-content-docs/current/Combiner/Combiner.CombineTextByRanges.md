---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Повертає функцію, яка об’єднує список тексту за допомогою вказаних позицій і значень довжини.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Повертає функцію, яка об’єднує список текстових значень в одне текстове значення за допомогою вказаних позицій вихідних даних і значень довжини. Довжина null указує, що текстове значення потрібно включити повністю.


## Examples

### Example #1 
Об’єднайте список текстових значень за допомогою вказаних позицій вихідних даних і значень довжини.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
