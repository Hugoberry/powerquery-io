---
title: Record.Field
---

# Record.Field


Restituisce il valore del campo specificato in un record.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Restituisce il valore dell'elemento specificato <code>field</code> in <code>record</code>. Se il campo non viene trovato, viene generata un'eccezione.


## Examples

### Example #1 
Trovare il valore del campo &#34;CustomerID&#34; nel record.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
