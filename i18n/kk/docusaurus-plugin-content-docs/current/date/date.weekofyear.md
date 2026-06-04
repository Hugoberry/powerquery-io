---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Осы күн жылдың қай аптасына жататынын көрсететін 1 және 54 арасындағы санды қайтарады.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

`dateTime` күнінің жылдың қай аптасына сәйкес келетінін көрсететін 1 мен 54 арасындағы санды қайтарады.

-   `dateTime`: Жылдың аптасы анықталатын `datetime`.
-   `firstDayOfWeek`: Жаңа аптаның басы ретінде саналатын күнді көрсететін қосымша `Day.Type` мәні (мысалы, `Day.Sunday`). Егер көрсетілмесе, тіл және аймақтық параметрлерге сәйкес әдепкі мән пайдаланылады.


## Examples

### Example #1
Жылдың қай аптасында 2011 жылдың 27 наурызы қамтылатынын анықтау.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Дүйсенбіні аптаның басы ретінде пайдаланып, 2011 жылдың 27 наурызы жылдың қай аптасында қамтылатынын анықтау.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
