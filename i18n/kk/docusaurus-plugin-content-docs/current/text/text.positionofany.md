---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Кез келген тізілген таңбаның мәтіндік мәніндегі бірінші орынды (табылмаса, -1 мәнін) қайтарады.


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

`text` ішінде орналасқан `characters` тізімінде кез келген таңбаның бірінші орнын қайтарады. Қай қайталану орнын қайтару керектігін көрсету үшін `occurrence` деген міндетті емес параметрді пайдалануға болады.


## Examples

### Example #1
"Hello, World!" мәтінінде "W" немесе "H" әрпінің бірінші орнын табады.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
"Hello, World!" мәтінінде "W" немесе "H" әрпінің барлық орындарын табады.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
