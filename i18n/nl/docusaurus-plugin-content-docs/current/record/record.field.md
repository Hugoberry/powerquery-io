---
title: Record.Field
---

# Record.Field


Retourneert de waarde uit het opgegeven veld in een record.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Retourneert de waarde uit het opgegeven `field` in de `record`. Er wordt een fout gegenereerd als het veld niet wordt gevonden.


## Examples

### Example #1
De waarde van veld CustomerID in de record zoeken.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
