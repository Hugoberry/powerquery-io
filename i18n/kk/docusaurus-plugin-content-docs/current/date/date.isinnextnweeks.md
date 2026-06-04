---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің келесі апталар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы аптада болған берілген мән болғанда "жалған" мәнін қайтарады.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген `dateTime` күн мен уақыт мәнінің келесі апталар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы аптада болған берілген мән болғанда "жалған" мәнін қайтарады.

-   `dateTime`: анықталатын `date`, `datetime` немесе `datetimezone` мәні.
-   `weeks`: апталар саны.


## Examples

### Example #1
Ағымдағы жүйе уақытынан кейінгі аптаның келесі екі апта ішінде екенін анықтаңыз.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
