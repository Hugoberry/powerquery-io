---
title: Record.HasFields
---

# Record.HasFields


## Description

Angiver, om posten indeholder angivne felter.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Angiver, om posten <code>record</code> indeholder de felter, der er angivet i <code>fields</code>, ved at returnere en logisk værdi (true eller false).    Der kan angives flere feltværdier ved hjælp af en liste.


## Examples

### Example #1 
Kontrollér, om posten indeholder feltet &#34;CustomerID&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Kontrollér, om posten indeholder feltet &#34;CustomerID&#34; og &#34;Address&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
