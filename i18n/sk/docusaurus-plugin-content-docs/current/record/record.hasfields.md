---
title: Record.HasFields
---

# Record.HasFields


Udáva, či záznam obsahuje zadané polia.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Udáva, či záznam `record` obsahuje polia zadané v zozname `fields`, a to vrátením logickej hodnoty (True alebo False). Pomocou zoznamu možno zadať viacero hodnôt polí.


## Examples

### Example #1
Skontrolujte, či záznam obsahuje pole CustomerID.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Skontrolujte, či záznam obsahuje polia CustomerID a Address.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
