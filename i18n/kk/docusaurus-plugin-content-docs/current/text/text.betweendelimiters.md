---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


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


## Remarks

Көрсетілген `startDelimiter` және `endDelimiter` арасындағы `text` бөлігін қайтарады. Қосымша саны бар `startIndex` `startDelimiter` қай қайталануы қарастырылатынын көрсетеді. `startIndex` қосымша тізімі `startDelimiter` қай қайталануы қарастырылатынын көрсетеді, сонымен қатар индекстеудің кіріс деректерінің басынан не соңынан жасалуын көрсетеді. `endIndex` ұқсас, бірақ индекстеу `startIndex` қатысты жасалады.


## Examples

### Example #1
(Бірінші) ашық жақша мен (бірінші) жабық жақшаның арасындағы "111 (222) 333 (444)" бөлігін алу.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
Екінші ашық жақша мен бірінші жабық жақшаның арасындағы "111 (222) 333 (444)" бөлігін алу.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Соңындағы екінші ашық жақша мен екінші жабық жақшаның арасындағы "111 (222) 333 (444)" бөлігін алу.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
