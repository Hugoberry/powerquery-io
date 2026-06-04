---
title: Record.FieldCount
---

# Record.FieldCount


Жазбадағы өрістер санын қайтарады.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

`record` жазбасындағы өрістер санын қайтарады.


## Examples

### Example #1
Жазбадағы өрістер санын анықтау.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
