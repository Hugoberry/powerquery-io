---
title: Record.HasFields
---

# Record.HasFields


Gibt an, ob der Datensatz die angegebenen Felder enthält.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Gibt durch Rückgabe eines logischen Werts ("true" oder "false") an, ob der Datensatz "`record`" die in "`fields`" angegebenen Felder enthält. Mehrere Feldwerte können in Listenform angegeben werden.


## Examples

### Example #1
Überprüft, ob der Datensatz das Feld "CustomerID" enthält.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Überprüft, ob der Datensatz die Felder "CustomerID" und "Address" enthält.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
