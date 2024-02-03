---
title: Record.FromList
---

# Record.FromList


## Description

Өріс мәндерінің тізімі және өрістер жиыны берілсе, жазбаны қайтарады.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Өріс мәндерінің <code>list</code> және өрістер жиыны берілсе, жазбаны қайтарады.  <code>fields</code> мәтіндік мәндердің тізімі немесе жазба түрі арқылы көрсетуге болады.  Өрістер бірегей болмаса, қате туралы хабар қайтарылады.


## Examples

### Example #1 
Өріс мәндерінің тізімінен және өріс атауларының тізімінен жазбаны жасау.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Өріс мәндерінің тізімінен және жазба түрінен жазбаны жасау.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
