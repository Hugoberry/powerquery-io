---
title: Record.FieldValues
---

# Record.FieldValues


Өріс мәндерінің тізімін қайтарады.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

`record` жазбасындағы өріс мәндерінің тізімін қайтарады.


## Examples

### Example #1
Жазбадағы өріс мәндерін анықтау.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
