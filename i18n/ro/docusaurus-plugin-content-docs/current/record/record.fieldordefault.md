---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Returnează valoarea câmpului specificat într-o înregistrare sau valoarea implicită dacă nu se găseşte câmpul.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Returnează valoarea câmpului specificat `field` din înregistrarea `record`. Dacă nu se găseşte câmpul, se returnează `defaultValue` opţional.


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
