---
title: Record.HasFields
---

# Record.HasFields


## Description

Визначає, чи запис містить указані поля.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Визначає, чи запис <code>record</code> містить поля, вказані в <code>fields</code>, повертаючи логічне значення (true або false).    Можна вказати кілька значень полів за допомогою списку.


## Examples

### Example #1 
Перевірити, чи запис містить поле &#34;CustomerID&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Перевірити, чи запис містить поля &#34;CustomerID&#34; та &#34;Адреса&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
