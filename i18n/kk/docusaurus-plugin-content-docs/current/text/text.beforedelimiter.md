---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

`delimiter` көрсетілмес бұрын `text` бөлігін қайтарады. Қосымша саны бар `index` `delimiter` қай қайталануы қарастырылатынын көрсетеді. `index` қосымша тізімі `delimiter` қай қайталануы қарастырылатынын, сонымен қатар индекстеудің кіріс деректерінің басынан не соңынан жасалуын көрсетеді.


## Examples

### Example #1
(Бірінші) сызықшаның алдында "111-222-333" бөлігін алу.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Екінші сызықшаның алдында "111-222-333" бөлігін алу.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Соңындағы екінші сызықшаның алдында "111-222-333" бөлігін алу.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
