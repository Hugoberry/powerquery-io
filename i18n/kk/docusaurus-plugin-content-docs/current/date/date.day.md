---
title: Date.Day
---

# Date.Day


Күн құрамдасын қайтарады.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

`date`, `datetime` немесе `datetimezone` мәнінің күн компонентін қайтарады.

-   `dateTime`: күн компоненті шығарып алынатын `date`, `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
5/14/2011 05:00:00 PM күнін және уақытын білдіретін `date`, `datetime` немесе `datetimezone` мәнінің күн құрамдасын алу.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
