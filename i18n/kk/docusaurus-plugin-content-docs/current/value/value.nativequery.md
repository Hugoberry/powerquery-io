---
title: Value.NativeQuery
---

# Value.NativeQuery


Сұрауды мақсаты бойынша бағалайды.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

`parameters` және `options` ішінде көрсетілген параметрлерді пайдалана отырып, `target` бойынша `query` есептейді.

Сұраудың шығыс деректері `target` арқылы анықталады.

`target` `query` сипатталған операция үшін контекст береді.

`query` `target` ішінде орындалатын сұрауды сипаттайды. `query` әдетте `target` сияқты көрсетіледі (мысалы, T-SQL нұсқауы).

Міндетті емес `parameters` мәні `query` тарапынан күтілетін параметр мәндерін қамтамасыз етуге арналған сәйкес тізімді немесе жазбаны қамтуы мүмкін.

Міндетті емес `options` жазбасы `target` бойынша `query` орындайтын әрекетке әсер ететін параметрлерді қамтуы мүмкін. Бұл параметрлер `target` қатысты.



## Category
Values
