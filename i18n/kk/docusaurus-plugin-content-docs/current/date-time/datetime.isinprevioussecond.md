---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мен уақыт мәнінің өткен секундта болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы секундта болған берілген мән болғанда "жалған" мәнін қайтарады.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген `dateTime` күн мен уақыт мәні өткен секундта болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы секундта болған берілген мән болғанда "жалған" мәнін қайтарады.

-   `dateTime`: анықталатын `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
Ағымдағы жүйе уақытына дейінгі секундтың өткен секундта екендігін анықтау.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
