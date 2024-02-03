---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Vraća vrednost navedenog polja u zapisu ili podrazumevane vrednosti ako se polje ne pronađe.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Vraća vrednost navedenog polja <code>field</code> u zapisu <code>record</code>. Ako se polje ne pronađe, vraća se opcionalna vrednost <code>defaultValue</code>.


## Examples

### Example #1 
Pronalaženje vrednosti polja „Telefon“ u zapisu ili vraćanje vrednosti bez vrednosti ako polje ne postoji.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Pronalaženje vrednosti polja „Telefon“ u zapisu ili vraćanje podrazumevane vrednosti ako polje ne postoji.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
