---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Returnează valoarea câmpului specificat într-o înregistrare sau valoarea implicită dacă nu se găseşte câmpul.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Returnează valoarea câmpului specificat <code>field</code> din înregistrarea <code>record</code>. Dacă nu se găseşte câmpul, se returnează <code>defaultValue</code> opţional.


## Examples

### Example #1 
Găsiți valoarea câmpului „Telefon” din înregistrare sau returnați valoarea nulă dacă nu există.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Găsiți valoarea câmpului „Telefon” din înregistrare sau returnați valoarea implicită dacă nu există.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
