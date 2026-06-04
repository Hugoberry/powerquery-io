---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің өткен күндер санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы күнде болған берілген мән болғанда "жалған" мәнін қайтарады.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген `dateTime` күн мен уақыт мәнінің алдыңғы күндер санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы күнде болған берілген мән болғанда "жалған" мәнін қайтарады.

-   `dateTime`: анықталатын `date`, `datetime` немесе `datetimezone` мәні.
-   `days`: күндер саны.


## Examples

### Example #1
Ағымдағы жүйе уақытынан бұрынғы күннің алдыңғы екі күн ішінде екенін анықтаңыз.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
