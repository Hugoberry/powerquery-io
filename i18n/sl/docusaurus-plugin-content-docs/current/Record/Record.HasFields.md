---
title: Record.HasFields
---

# Record.HasFields


## Description

Označuje, ali ima zapis navedena polja.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Označuje, ali ima zapis <code>record</code> polja, navedena v <code>fields</code>, tako da vrne logično vrednost ("true" ali "false").    S seznamom lahko navedete več vrednosti polj.


## Examples

### Example #1 
Preverite, ali zapis vsebuje polje &#34;IDStranke&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Preverite, ali zapis vsebuje polji &#34;IDStranke&#34; in &#34;Telefon&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
