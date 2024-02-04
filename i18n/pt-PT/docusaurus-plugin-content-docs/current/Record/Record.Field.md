---
title: Record.Field
---

# Record.Field


## Description

Devolve o valor do campo especificado num registo.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Devolve o valor do <code>field</code> especificado no <code>record</code>. Se o campo não for encontrado, é emitida uma exceção.


## Examples

### Example #1 
Determinar o valor do campo &#34;CustomerID&#34; no registo.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
