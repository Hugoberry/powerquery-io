---
title: Record.Field
---

# Record.Field


## Description

Retourneert de waarde uit het opgegeven veld in een record.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Retourneert de waarde uit het opgegeven <code>field</code> in de <code>record</code>. Als het veld niet wordt gevonden, wordt er een uitzondering gegenereerd.


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
