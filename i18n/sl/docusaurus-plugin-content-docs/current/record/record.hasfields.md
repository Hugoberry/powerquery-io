---
title: Record.HasFields
---

# Record.HasFields


Označuje, ali ima zapis navedena polja.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Označuje, ali ima zapis `record` polja, navedena v `fields`, tako da vrne logično vrednost ("true"ali"false"). S seznamom lahko navedete več vrednosti polj.


## Examples

### Example #1
Preverite, ali zapis vsebuje polje"IDStranke".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Preverite, ali zapis vsebuje polji"IDStranke"in"Telefon".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
