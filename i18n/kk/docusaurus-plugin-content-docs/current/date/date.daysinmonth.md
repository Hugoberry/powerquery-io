---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Айдағы күндер санын көрсететін 28 мен 31 арасындағы санды қайтарады.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

`date`, `datetime` немесе `datetimezone` мәніндегі айдағы күндер санын қайтарады `dateTime`.

-   `dateTime`: айдағы күндер саны қайтарылатын `date`, `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
`#date(2011, 12, 01)` арқылы көрсетілгендей желтоқсан айындағы күндер саны.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
