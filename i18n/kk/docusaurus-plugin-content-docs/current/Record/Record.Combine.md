---
title: Record.Combine
---

# Record.Combine


## Description

Осы тізімдегі жазбаларды біріктіреді.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Осы <code>records</code> ішіндегі жазбаларды біріктіреді. Егер <code>records</code> жазба емес мәндерді қамтыса, қате қайтарылады.


## Examples

### Example #1 
Жазбалардан біріктірілген жазба жасау.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
