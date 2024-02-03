---
title: Record.FromList
---

# Record.FromList


## Description

Egy rekordot ad vissza a mezőértékek megadott listája és a mezők halmaza alapján.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Egy rekordot ad vissza a mezőértékeket tartalmazó megadott <code>list</code> és a mezők halmaza alapján. A(z) <code>fields</code> megadható szöveges értékek listájával vagy egy rekordtípussal. A függvény hibát vált ki, ha a mezők nem egyediek.


## Examples

### Example #1 
Rekord összeállítása a mezőértékek listája és a mezőnevek listája alapján
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Rekord összeállítása a mezőértékek listája és egy rekordtípus alapján
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
