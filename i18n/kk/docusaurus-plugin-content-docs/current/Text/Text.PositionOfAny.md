---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Кез келген тізілген таңбаның мәтіндік мәніндегі бірінші орынды (табылмаса, -1 мәнін) қайтарады.


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

<code>text</code> ішінде орналасқан <code>characters</code> тізімінде кез келген таңбаның бірінші орнын қайтарады.
    Қай қайталану орнын қайтару керектігін көрсету үшін <code>occurrence</code> деген міндетті емес параметрді пайдалануға болады.


## Examples

### Example #1 
&#34;Hello, World!&#34; мәтінінде &#34;W&#34; немесе &#34;H&#34; әрпінің бірінші орнын табады.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
&#34;Hello, World!&#34; мәтінінде &#34;W&#34; немесе &#34;H&#34; әрпінің барлық орындарын табады.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
