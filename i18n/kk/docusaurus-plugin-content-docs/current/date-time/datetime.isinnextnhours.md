---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мен уақыт мәнінің келесі сағаттар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы сағатта болған берілген мән болғанда "жалған" мәнін қайтарады.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген `dateTime` күн мен уақыт мәні келесі сағаттар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы сағатта болған берілген мән болғанда "жалған" мәнін қайтарады.

-   `dateTime`: анықталатын `datetime` немесе `datetimezone` мәні.
-   `hours`: сағаттар саны.


## Examples

### Example #1
Ағымдағы жүйе уақытынан кейінгі сағаттың келесі екі сағатта екендігін анықтау.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
