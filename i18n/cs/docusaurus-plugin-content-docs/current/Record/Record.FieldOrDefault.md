---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Vrátí hodnotu zadaného pole záznamu nebo výchozí hodnotu, pokud pole není nalezeno.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Vrátí hodnotu zadaného pole <code>field</code> záznamu <code>record</code>. Pokud pole není nalezeno, vrátí se volitelná hodnota <code>defaultValue</code>.


## Examples

### Example #1 
Vrátí hodnotu pole Phone záznamu nebo hodnotu null, pokud neexistuje.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Vrátí hodnotu pole Phone záznamu nebo výchozí hodnotu, pokud neexistuje.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
