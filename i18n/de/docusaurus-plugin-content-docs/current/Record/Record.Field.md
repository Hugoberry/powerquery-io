---
title: Record.Field
---

# Record.Field


## Description

Gibt den Wert des angegebenen Felds in einem Datensatz zurück.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Gibt den Wert des angegebenen Elements vom Typ "<code>field</code>" in "<code>record</code>" zurück. Wird das Feld nicht gefunden, wird eine Ausnahme ausgelöst.


## Examples

### Example #1 
Ermittelt den Wert des Felds &#39;CustomerID&#39; im Datensatz.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
