---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

<code>delimiter</code> көрсетілмес бұрын <code>text</code> бөлігін қайтарады.    Қосымша саны бар <code>index</code> <code>delimiter</code> қай қайталануы қарастырылатынын көрсетеді.    <code>index</code> қосымша тізімі <code>delimiter</code> қай қайталануы қарастырылатынын, сонымен қатар индекстеудің кіріс деректерінің басынан не соңынан жасалуын көрсетеді.


## Examples

### Example #1 
(Бірінші) сызықшаның алдында &#34;111-222-333&#34; бөлігін алу.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Екінші сызықшаның алдында &#34;111-222-333&#34; бөлігін алу.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Соңындағы екінші сызықшаның алдында &#34;111-222-333&#34; бөлігін алу.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
