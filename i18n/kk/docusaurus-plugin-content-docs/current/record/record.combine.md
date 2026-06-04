---
title: Record.Combine
---

# Record.Combine


Осы тізімдегі жазбаларды біріктіреді.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Осы `records` ішіндегі жазбаларды біріктіреді. Егер `records` жазба емес мәндерді қамтыса, қате қайтарылады.


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
