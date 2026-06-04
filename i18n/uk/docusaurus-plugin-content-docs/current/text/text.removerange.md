---
title: Text.RemoveRange
---

# Text.RemoveRange


Видаляє задану кількість символів, починаючи з указаного зсуву.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Повертає копію текстового значення `text`, звідки вилучено всі символи, починаючи з позиції `offset`. Можна вказати додатковий параметр `count` із зазначенням кількості символів, які слід вилучити. Стандартне значення параметра `count` становить 1. Значення позицій починаються з 0.


## Examples

### Example #1
Видалити 1 символ з текстового значення "ABEFC", що знаходиться в позиції 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Видалити два символи з текстового значення "ABEFC", починаючи з позиції 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
