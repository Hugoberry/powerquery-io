---
title: Record.HasFields
---

# Record.HasFields


## Description

Wskazuje, czy rekord zawiera określone pola.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Wskazuje, czy rekord <code>record</code> zawiera pola określone w parametrze <code>fields</code>, zwracając wartość logiczną (true lub false).    Używając listy, można określić wiele wartości pól.


## Examples

### Example #1 
Sprawdź, czy rekord zawiera pole „CustomerID”.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Sprawdź, czy rekord zawiera pola „CustomerID” i „Address”.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
