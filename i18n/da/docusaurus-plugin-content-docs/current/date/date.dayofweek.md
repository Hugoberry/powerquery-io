---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Returnerer et tal (fra 0 til 6), som angiver ugedagen for den angivne værdi.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Returnerer et tal (fra 0 til 6), som angiver ugedagen for den angivne `dateTime`.

-   `dateTime`: En `date`\-, `datetime`\-, eller `datetimezone`\-værdi.
-   `firstDayOfWeek`: En `Day`\-værdi, som angiver den dag, der skal opfattes som den første dag i ugen. Tilladte værdier er Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday eller Day.Saturday. Hvis denne ikke angives, vil en kulturafhængig standard blive anvendt.


## Examples

### Example #1
Se den ugedag, der er repræsenteret af mandag den 21. februar 2011, hvis søndag behandles som den første dag i ugen.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2
Se den ugedag, der er repræsenteret af mandag den 21. februar 2011, hvor mandag behandles som den første dag i ugen.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
