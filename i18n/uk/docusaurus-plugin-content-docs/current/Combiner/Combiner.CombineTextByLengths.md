---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Повертає функцію, яка об’єднує список тексту за допомогою вказаних значень довжини.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Повертає функцію, яка об’єднує список текстових значень в одне текстове значення за допомогою вказаних значень довжини.


## Examples

### Example #1 
Об’єднайте список текстових значень, видобувши вказані номери символів із кожного вхідного значення.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Об’єднайте список текстових значень, видобувши вказані номери символів, після першого попереднього заповнення результату текстом шаблону.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
