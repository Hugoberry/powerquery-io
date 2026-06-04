---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Жазбадағы көрсетілген өрістің мәнін немесе өріс табылмаса, әдепкі мәнді қайтарады.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

`record` жазбасындағы көрсетілген `field` өрісінің мәнін қайтарады. Егер өріс табылмаса, міндетті емес `defaultValue` қайтарылады.


## Examples

### Example #1
Жазбадағы "Phone" өрісінің мәнін анықтау немесе ол жоқ болса, null мәнін қайтару.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Жазбадағы "Phone" өрісінің мәнін табу немесе ол жоқ болса, әдепкі мәнді қайтару.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
