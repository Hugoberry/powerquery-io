---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Details

Көрсетілген <code>startDelimiter</code> және <code>endDelimiter</code> арасындағы <code>text</code> бөлігін қайтарады.    Қосымша саны бар <code>startIndex</code> <code>startDelimiter</code> қай қайталануы қарастырылатынын көрсетеді.    <code>startIndex</code> қосымша тізімі <code>startDelimiter</code> қай қайталануы қарастырылатынын көрсетеді, сонымен қатар индекстеудің кіріс деректерінің басынан не соңынан жасалуын көрсетеді.    <code>endIndex</code> ұқсас, бірақ индекстеу <code>startIndex</code> қатысты жасалады.


## Examples

### Example #1 
(Бірінші) ашық жақша мен (бірінші) жабық жақшаның арасындағы &#34;111 (222) 333 (444)&#34; бөлігін алу.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Екінші ашық жақша мен бірінші жабық жақшаның арасындағы &#34;111 (222) 333 (444)&#34; бөлігін алу.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Соңындағы екінші ашық жақша мен екінші жабық жақшаның арасындағы &#34;111 (222) 333 (444)&#34; бөлігін алу.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
