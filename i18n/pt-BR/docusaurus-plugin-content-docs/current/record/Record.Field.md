---
title: Record.Field
---

# Record.Field


Retorna o valor do campo especificado em um registro.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Retorna o valor do <code>field</code> especificado no <code>record</code>. Se o campo não for encontrado, uma exceção será lançada.


## Examples

### Example #1 
Localizar o valor do campo &#34; CustomerID &#34; no registro.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
