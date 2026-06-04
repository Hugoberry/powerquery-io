---
title: Logical.FromText
---

# Logical.FromText


Створює логічне значення з текстових значень "true" і "false".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Створює логічне значення з текстового значення `text`, "true" або "false". Якщо `text` містить інший рядок, стається помилка. Текстове значення `text` не враховує регістр.


## Examples

### Example #1
Створити логічне значення з текстового рядка "true".
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Створити логічне значення з текстового рядка "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
