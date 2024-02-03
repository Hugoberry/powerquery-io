---
title: Record.Field
---

# Record.Field


## Description

Жазбадағы көрсетілген өрістің мәнін қайтарады.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

<code>record</code> ішіндегі көрсетілген <code>field</code> мәнін қайтарады. Егер өріс табылмаса, қиыс жағдай туралы хабар қайтарылады.


## Examples

### Example #1 
Жазбадағы &#34;CustomerID&#34; өрісінің мәнін анықтау.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
