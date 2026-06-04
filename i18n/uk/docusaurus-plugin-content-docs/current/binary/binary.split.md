---
title: Binary.Split
---

# Binary.Split


Розділяє вказане двійкове значення на список двійкових даних за вказаним розміром сторінки.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Розділяє `binary` на список двійкових даних, перший елемент якого містить першу `pageSize`\-байтову частину вихідного двійкового значення, наступний – наступну `pageSize`\-байтову частину вихідного двійкового значення тощо.



## Category
Binary
