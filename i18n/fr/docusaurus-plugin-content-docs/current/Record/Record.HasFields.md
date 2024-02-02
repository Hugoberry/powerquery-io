---
title: Record.HasFields
---

# Record.HasFields


## Description

Indique si l&#39;enregistrement a les champs spécifiés.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Indique si l'enregistrement <code>record</code> a les champs spécifiés dans <code>fields</code>, en retournant une valeur logique (true ou false).    Plusieurs valeurs de champ peuvent être spécifiées dans une liste.


## Examples

### Example #1 
Vérifie si l&#39;enregistrement a le champ &#34; CustomerID &#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Vérifie si l&#39;enregistrement a les champs &#34; CustomerID &#34; et &#34; Address &#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
