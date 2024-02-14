---
title: Record.HasFields
---

# Record.HasFields


Указывает, содержит ли запись указанные поля.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Указывает, содержит ли запись <code>record</code> поля, заданные в <code>fields</code>, возвращая логическое значение (true или false).    Значения нескольких полей можно указать с помощью списка.


## Examples

### Example #1 
Проверка, содержится ли в записи поле CustomerID.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Проверка, содержатся ли в записи поля CustomerID и Address.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
