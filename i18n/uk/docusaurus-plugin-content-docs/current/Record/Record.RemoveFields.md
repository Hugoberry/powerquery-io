---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Видаляє вказані поля із вхідного запису.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Повертає запис, який видаляє усі поля, вказані у списку <code>fields</code>, із вхідного запису <code>record</code>. Якщо вказане поле не існує, повертається виняткова ситуація.


## Examples

### Example #1 
Видалити поле &#34;Price&#34; із запису.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Видалити поля &#34;Price&#34; та &#34;Item&#34; із запису.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
