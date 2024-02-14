---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Retourne la valeur du champ spécifié dans un enregistrement ou la valeur par défaut si le champ est introuvable.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Retourne la valeur du champ spécifié <code>field</code> dans l'enregistrement <code>record</code>. Si le champ est introuvable, la valeur <code>defaultValue</code> facultative est retournée.


## Examples

### Example #1 
Recherche la valeur du champ &#34; Phone &#34; dans l&#39;enregistrement ou retourne null s&#39;il n&#39;existe pas.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Recherche la valeur du champ &#34; Phone &#34; dans l&#39;enregistrement ou retourne la valeur par défaut s&#39;il n&#39;existe pas.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
