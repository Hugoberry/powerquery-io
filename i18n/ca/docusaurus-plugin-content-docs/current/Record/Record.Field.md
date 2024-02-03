---
title: Record.Field
---

# Record.Field


## Description

Retorna el valor del camp especificat en un registre.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Retorna el valor del <code>field</code> especificat al <code>record</code>. Si no es troba el camp, es produeix una excepció.


## Examples

### Example #1 
Cerca el valor del camp &#34;CustomerID&#34; al registre.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
