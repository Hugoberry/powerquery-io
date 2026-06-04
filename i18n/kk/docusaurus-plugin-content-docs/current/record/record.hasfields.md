---
title: Record.HasFields
---

# Record.HasFields


Жазбада көрсетілген өрістердің болуын көрсетеді.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

`record` жазбасында `fields` ішінде көрсетілген өрістер бар-жоғын логикалық мәнді (шын немесе өтірік) қайтару арқылы көрсетеді. Бірнеше өріс мәнін тізімді пайдаланып көрсетуге болады.


## Examples

### Example #1
Жазбада "CustomerID" өрісінің болуын тексеру.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Жазбада "CustomerID" және "Address" өрісінің болуын тексеру.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
