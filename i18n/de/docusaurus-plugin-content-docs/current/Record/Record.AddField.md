---
title: Record.AddField
---

# Record.AddField


## Description

Fügt einem Datensatz ein Feld hinzu.


## Syntax

```powerquery
Record.AddField(
    record as record,
    fieldName as text,
    value as any,
    optional delayed as logical
) as record
```


## Details

Fügt einem Datensatz (<code>record</code>) auf der Grundlage des Feldnamens (<code>fieldName</code>) und -werts (<code>value</code>) ein Feld hinzu.


## Examples

### Example #1 
Fügt dem Datensatz das Feld &#34;Address&#34; hinzu.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
