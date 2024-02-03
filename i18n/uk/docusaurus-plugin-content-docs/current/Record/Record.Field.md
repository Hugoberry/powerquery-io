---
title: Record.Field
---

# Record.Field


## Description

Повертає значення вказаного поля в записі.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Повертає значення вказаного поля <code>field</code> у записі <code>record</code>. Якщо поле не знайдено, повертається виняткова ситуація.


## Examples

### Example #1 
Знайти в записі значення поля &#34;CustomerID&#34;.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
