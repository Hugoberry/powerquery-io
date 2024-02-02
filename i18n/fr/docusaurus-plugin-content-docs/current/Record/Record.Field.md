---
title: Record.Field
---

# Record.Field


## Description

Retourne la valeur du champ spécifié dans un enregistrement.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Retourne la valeur du <code>field</code> spécifié dans <code>record</code>. Si le champ est introuvable, une exception est levée.


## Examples

### Example #1 
Recherche la valeur du champ &#34; CustomerID &#34; dans l&#39;enregistrement.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
