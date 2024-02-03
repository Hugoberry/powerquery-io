---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Возвращает значение указанного поля в записи или значение по умолчанию, если поле не найдено.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Возвращает значение указанного поля <code>field</code> в записи <code>record</code>. Если поле не найдено, то возвращается необязательное значение <code>defaultValue</code>.


## Examples

### Example #1 
Нахождение значения поля Phone в записи или возврат значения Null, если оно не существует.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Нахождение значения поля Phone в записи или возврат значения по умолчанию, если оно не существует.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
