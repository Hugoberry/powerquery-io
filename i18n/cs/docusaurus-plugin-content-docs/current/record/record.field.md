---
title: Record.Field
---

# Record.Field


Vrátí hodnotu zadaného pole záznamu.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Vrátí hodnotu zadaného pole `field` záznamu `record`. Pokud se pole nenajde, vyvolá se chyba.


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
