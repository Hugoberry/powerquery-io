---
title: Binary.Split
---

# Binary.Split


## Description

Розділяє вказане двійкове значення на список двійкових даних за вказаним розміром сторінки.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Розділяє <code>binary</code> на список двійкових даних, перший елемент якого містить першу <code>pageSize</code>-байтову частину    вихідного двійкового значення, наступний – наступну <code>pageSize</code>-байтову частину вихідного двійкового значення тощо.



## Category
Binary
