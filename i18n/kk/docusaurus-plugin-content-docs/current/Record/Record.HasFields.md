---
title: Record.HasFields
---

# Record.HasFields


## Description

Жазбада көрсетілген өрістердің болуын көрсетеді.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

<code>record</code> жазбасында <code>fields</code> ішінде көрсетілген өрістер бар-жоғын логикалық мәнді (шын немесе өтірік) қайтару арқылы көрсетеді.    Бірнеше өріс мәнін тізімді пайдаланып көрсетуге болады.


## Examples

### Example #1 
Жазбада &#34;CustomerID&#34; өрісінің болуын тексеру.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Жазбада &#34;CustomerID&#34; және &#34;Address&#34; өрісінің болуын тексеру.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
