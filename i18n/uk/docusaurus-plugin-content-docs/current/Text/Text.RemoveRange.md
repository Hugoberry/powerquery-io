---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Видаляє задану кількість символів, починаючи з указаного зсуву.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Повертає копію текстового значення <code>text</code>, звідки вилучено всі символи, починаючи з позиції <code>offset</code>.    Можна вказати додатковий параметр <code>count</code> із зазначенням кількості символів, які слід вилучити. Стандартне значення параметра <code>count</code> становить 1. Значення позицій починаються з 0.


## Examples

### Example #1 
Видалити 1 символ з текстового значення &#34;ABEFC&#34;, що знаходиться в позиції 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Видалити два символи з текстового значення &#34;ABEFC&#34;, починаючи з позиції 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
