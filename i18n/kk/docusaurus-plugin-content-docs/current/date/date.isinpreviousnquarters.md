---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің өткен тоқсандар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы тоқсанда болған берілген мән болғанда "жалған" мәнін қайтарады.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген `dateTime` күн мен уақыт мәнінің алдыңғы тоқсандар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы тоқсанда болған берілген мән болғанда "жалған" мәнін қайтарады.

-   `dateTime`: анықталатын `date`, `datetime` немесе `datetimezone` мәні.
-   `quarters`: тоқсандар саны.


## Examples

### Example #1
Ағымдағы жүйе уақытынан бұрынғы тоқсанның алдыңғы екі тоқсан ішінде екенін анықтаңыз.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
