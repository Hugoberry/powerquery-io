---
title: Logical.ToText
---

# Logical.ToText


Повертає текст "true" або "false" по заданому логічному значенню.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Створює текстове значення з логічного значення `logicalValue`, `true` або `false`. Якщо `logicalValue` не є логічним значенням, стається помилка.


## Examples

### Example #1
Створити текстове значення з логічного `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
