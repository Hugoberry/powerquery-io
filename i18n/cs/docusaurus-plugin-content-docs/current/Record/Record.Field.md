---
title: Record.Field
---

# Record.Field


## Description

Vrátí hodnotu zadaného pole záznamu.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Vrátí hodnotu zadaného pole <code>field</code> záznamu <code>record</code>. Pokud pole není nalezeno, je vržena výjimka.


## Examples

### Example #1 
Vrátí hodnotu pole CustomerID záznamu.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
