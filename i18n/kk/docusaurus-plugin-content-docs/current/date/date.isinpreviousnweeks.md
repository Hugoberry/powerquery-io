---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің өткен апталар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы аптада болған берілген мән болғанда "жалған" мәнін қайтарады.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген `dateTime` күн мен уақыт мәнінің алдыңғы апталар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы аптада болған берілген мән болғанда "жалған" мәнін қайтарады.

-   `dateTime`: анықталатын `date`, `datetime` немесе `datetimezone` мәні.
-   `weeks`: апталар саны.


## Examples

### Example #1
Ағымдағы жүйе уақытынан бұрынғы аптаның алдыңғы екі апта ішінде екенін анықтаңыз.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
