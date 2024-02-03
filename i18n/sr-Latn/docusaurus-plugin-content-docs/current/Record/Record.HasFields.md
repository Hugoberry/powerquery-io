---
title: Record.HasFields
---

# Record.HasFields


## Description

Pokazuje da li zapis sadrži navedena polja.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Pokazuje da li zapis <code>record</code> sadrži polja navedena u <code>fields</code>, tako što vraća logičku vrednost („true“ ili „false“).    Moguće je navesti više vrednosti polja pomoću liste.


## Examples

### Example #1 
Proveravanje da li zapis sadrži polje „IDKupca“.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Proveravanje da li zapis sadrži polja „IDKupca“ i „Adresa“.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
