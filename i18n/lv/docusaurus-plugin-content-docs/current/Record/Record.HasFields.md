---
title: Record.HasFields
---

# Record.HasFields


## Description

Tiek norādīts, vai ierakstā ir ietverti norādītie lauki.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Atgriežot loģisko vērtību (True vai False), tiek norādīts, vai ierakstā <code>record</code> ir ietverti sarakstā <code>fields</code> norādītie lauki.    Izmantojot sarakstu, var norādīt vairākas lauku vērtības.


## Examples

### Example #1 
Pārbaudiet, vai ierakstā ir ietverts lauks &#34;CustomerID&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Pārbaudiet, vai ierakstā ir ietverti lauki &#34;CustomerID&#34; un &#34;Address&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
