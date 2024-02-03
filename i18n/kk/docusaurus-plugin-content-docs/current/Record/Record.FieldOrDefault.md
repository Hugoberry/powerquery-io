---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Жазбадағы көрсетілген өрістің мәнін немесе өріс табылмаса, әдепкі мәнді қайтарады.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

<code>record</code> жазбасындағы көрсетілген <code>field</code> өрісінің мәнін қайтарады. Егер өріс табылмаса, міндетті емес <code>defaultValue</code> қайтарылады.


## Examples

### Example #1 
Жазбадағы &#34;Phone&#34; өрісінің мәнін анықтау немесе ол жоқ болса, null мәнін қайтару.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Жазбадағы &#34;Phone&#34; өрісінің мәнін табу немесе ол жоқ болса, әдепкі мәнді қайтару.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
