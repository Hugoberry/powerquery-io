---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мен уақыт мәнінің келесі секундта болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы секундта болған берілген мән болғанда "жалған" мәнін қайтарады.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Remarks

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген `dateTime` күн мен уақыт мәні келесі секундта болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы секундта болған берілген мән болғанда "жалған" мәнін қайтарады.

-   `dateTime`: анықталатын `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
Ағымдағы жүйе уақытынан кейінгі секундтың келесі секундта екендігін анықтау.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
