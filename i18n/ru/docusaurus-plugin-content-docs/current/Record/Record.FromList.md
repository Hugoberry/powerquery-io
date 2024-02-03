---
title: Record.FromList
---

# Record.FromList


## Description

Возвращает запись для данного списка значений полей и набора полей.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Возвращает запись для данного списка <code>list</code> значений полей и набора полей.  <code>fields</code> можно задать либо списком текстовых значений, либо типом "запись".  Если поля неуникальны, выдается ошибка.


## Examples

### Example #1 
Создать запись из списка значений полей и списка имен полей.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Создать запись из списка значений полей и записи.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
