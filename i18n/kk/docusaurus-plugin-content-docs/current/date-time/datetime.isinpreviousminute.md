---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мен уақыт мәнінің өткен минутта болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы минутта болған берілген мән болғанда "жалған" мәнін қайтарады.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Remarks

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген `dateTime` күн мен уақыт мәні өткен минутта болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы минутта болған берілген мән болғанда "жалған" мәнін қайтарады.

-   `dateTime`: анықталатын `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
Ағымдағы жүйе уақытына дейінгі минуттың өткен минутта екендігін анықтау.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
