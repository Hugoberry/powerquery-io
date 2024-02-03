---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Zwraca wartość określonego pola w rekordzie lub wartość domyślną, jeśli nie można odnaleźć pola.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Zwraca wartość określonego pola <code>field</code> w rekordzie <code>record</code>. Jeśli pole nie zostanie znalezione, jest zwracana opcjonalna wartość <code>defaultValue</code>.


## Examples

### Example #1 
Znajdź wartość pola „Phone” w rekordzie lub zwróć wartość null, jeśli to pole nie istnieje.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Znajdź wartość pola „Phone” w rekordzie lub zwróć wartość domyślną, jeśli to pole nie istnieje.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
