---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мен уақыт мәнінің өткен минуттар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы минутта болған берілген мән болғанда "жалған" мәнін қайтарады.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген `dateTime` күн мен уақыт мәні өткен минуттар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы минутта болған берілген мән болғанда "жалған" мәнін қайтарады.

-   `dateTime`: анықталатын `datetime` немесе `datetimezone` мәні.
-   `minutes`: минуттар саны.


## Examples

### Example #1
Ағымдағы жүйе уақытына дейінгі минуттың өткен екі минутта екендігін анықтау.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
