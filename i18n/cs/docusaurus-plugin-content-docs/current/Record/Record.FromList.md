---
title: Record.FromList
---

# Record.FromList


## Description

Vrátí záznam na základě seznamu hodnot polí a sady polí.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Vrátí záznam na základě seznamu hodnot polí <code>list</code> a sady polí.  Záznam <code>fields</code> lze zadat pomocí seznamu textových hodnot nebo typu záznamu.  Pokud pole nejsou jedinečná, je vržena chyba.


## Examples

### Example #1 
Vytvoří záznam na základě seznamu hodnot polí a seznamu názvů polí.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Vytvoří záznam na základě seznamu hodnot polí a typu záznamu.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
