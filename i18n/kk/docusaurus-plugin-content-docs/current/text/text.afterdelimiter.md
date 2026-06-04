---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

`delimiter` көрсетілгеннен кейін `text` бөлігін қайтарады. Қосымша саны бар `index` `delimiter` қай қайталануы қарастырылатынын көрсетеді. `index` қосымша тізімі `delimiter` қай қайталануы қарастырылатынын, сонымен қатар индекстеудің кіріс деректерінің басынан не соңынан жасалуын көрсетеді.


## Examples

### Example #1
(Бірінші) сызықшадан кейін "111-222-333" бөлігін алу.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Екінші сызықшадан кейін "111-222-333" бөлігін алу.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Соңындағы екінші сызықшадан кейін "111-222-333" бөлігін алу.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
