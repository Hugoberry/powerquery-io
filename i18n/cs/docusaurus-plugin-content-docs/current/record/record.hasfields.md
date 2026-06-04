---
title: Record.HasFields
---

# Record.HasFields


Značí, zda má záznam zadaná pole.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Vrácením logické hodnoty značí, zda má záznam `record` pole zadaná ve výrazu `fields`. Pomocí seznamu lze zadat více hodnot polí.


## Examples

### Example #1
Zjistí, jestli záznam obsahuje pole CustomerID.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Zjistí, jestli záznam obsahuje pole CustomerID a Address.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
