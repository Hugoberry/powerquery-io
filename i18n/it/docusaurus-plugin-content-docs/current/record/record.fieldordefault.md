---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Restituisce il valore del campo specificato in un record o il valore predefinito se il campo non viene trovato.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Restituisce il valore del campo specificato `field` nel record `record`. Se il campo non viene trovato, viene restituito l'elemento facoltativo `defaultValue`.


## Examples

### Example #1
Trovare il valore del campo "Phone" o restituire Null se non esiste.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Trovare il valore del campo "Phone" o restituire il valore predefinito se non esiste.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
