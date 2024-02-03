---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Restituisce il valore del campo specificato in un record o il valore predefinito se il campo non viene trovato.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Restituisce il valore del campo specificato <code>field</code> nel record <code>record</code>. Se il campo non viene trovato, viene restituito l'elemento facoltativo <code>defaultValue</code>.


## Examples

### Example #1 
Trovare il valore del campo &#34;Phone&#34; o restituire Null se non esiste.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Trovare il valore del campo &#34;Phone&#34; o restituire il valore predefinito se non esiste.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
