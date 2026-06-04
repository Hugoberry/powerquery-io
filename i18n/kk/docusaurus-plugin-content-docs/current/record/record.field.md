---
title: Record.Field
---

# Record.Field


Жазбадағы көрсетілген өрістің мәнін қайтарады.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

`field` ішіндегі көрсетілген `record` мәнін қайтарады. Егер өріс табылмаса, қате туады.


## Examples

### Example #1
Жазбадағы "CustomerID" өрісінің мәнін анықтау.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
