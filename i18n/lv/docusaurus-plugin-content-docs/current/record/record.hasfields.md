---
title: Record.HasFields
---

# Record.HasFields


Tiek norādīts, vai ierakstā ir ietverti norādītie lauki.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Atgriežot loģisko vērtību (True vai False), tiek norādīts, vai ierakstā `record` ir ietverti sarakstā `fields` norādītie lauki. Izmantojot sarakstu, var norādīt vairākas lauku vērtības.


## Examples

### Example #1
Pārbaudiet, vai ierakstā ir ietverts lauks "CustomerID".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Pārbaudiet, vai ierakstā ir ietverti lauki "CustomerID" un "Address".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
