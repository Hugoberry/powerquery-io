---
title: Record.FromList
---

# Record.FromList


## Description

Vráti záznam s daným zoznamom hodnôt polí a s množinou polí.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Vráti záznam s daným zoznamom <code>list</code> hodnôt polí a s množinou polí.  Zoznam <code>fields</code> možno zadať pomocou zoznamu textových hodnôt alebo pomocou typu záznamu.  Ak polia nie sú jedinečné, dôjde k výnimke.


## Examples

### Example #1 
Zostavte záznam zo zoznamu hodnôt polí a zo zoznamu názvov polí.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Zostavte záznam zo zoznamu hodnôt polí a z typu záznamu.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
