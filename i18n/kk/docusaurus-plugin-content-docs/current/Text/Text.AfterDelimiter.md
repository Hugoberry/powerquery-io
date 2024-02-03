---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


## Description

Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

<code>delimiter</code> көрсетілгеннен кейін <code>text</code> бөлігін қайтарады.    Қосымша саны бар <code>index</code> <code>delimiter</code> қай қайталануы қарастырылатынын көрсетеді.    <code>index</code> қосымша тізімі <code>delimiter</code> қай қайталануы қарастырылатынын, сонымен қатар индекстеудің кіріс деректерінің басынан не соңынан жасалуын көрсетеді.


## Examples

### Example #1 
(Бірінші) сызықшадан кейін &#34;111-222-333&#34; бөлігін алу.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Екінші сызықшадан кейін &#34;111-222-333&#34; бөлігін алу.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Соңындағы екінші сызықшадан кейін &#34;111-222-333&#34; бөлігін алу.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
