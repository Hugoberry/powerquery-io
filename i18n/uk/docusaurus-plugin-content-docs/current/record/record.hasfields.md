---
title: Record.HasFields
---

# Record.HasFields


Визначає, чи запис містить указані поля.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Визначає, чи запис `record` містить поля, вказані в `fields`, повертаючи логічне значення (true або false). Можна вказати кілька значень полів за допомогою списку.


## Examples

### Example #1
Перевірити, чи запис містить поле "CustomerID".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Перевірити, чи запис містить поля "CustomerID" та "Адреса".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
