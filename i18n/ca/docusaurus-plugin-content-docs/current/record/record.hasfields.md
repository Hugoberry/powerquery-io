---
title: Record.HasFields
---

# Record.HasFields


Indica si el registre té els camps especificats.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Indica si el registre `record` té els camps especificats a `fields` i retorna un valor lògic (true o false). Els valors amb diversos camps es poden especificar mitjançant una llista.


## Examples

### Example #1
Comprova si el registre té el camp "CustomerID".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Comprova si el registre té els camps "CustomerID" i "Address".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
