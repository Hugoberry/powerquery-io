---
title: Record.AddField
---

# Record.AddField


## Description

Ajoute un champ à un enregistrement.


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

Ajoute un champ à un enregistrement <code>record</code>, selon le nom du champ <code>fieldName</code> et la valeur <code>value</code>.


## Examples

### Example #1 
Ajoute le champ &#34; Address &#34; à l&#39;enregistrement.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
