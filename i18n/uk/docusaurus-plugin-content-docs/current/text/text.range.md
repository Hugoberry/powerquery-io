---
title: Text.Range
---

# Text.Range


Повертає підрядок, знайдений зі зсувом.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Повертає підрядок тексту `text`, знайдений зі зсувом `offset`. Можна включити додатковий параметр `count`, щоб указати, скільки символів слід повернути. Якщо символів замало, стається помилка.


## Examples

### Example #1
Знайти підрядок тексту "Hello World", що починається за індексом 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Знайти підрядок тексту "Hello World", що починається за індексом 6 і охоплює 5 символів.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
