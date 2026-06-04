---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің өткен айлар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы айда болған берілген мән болғанда "жалған" мәнін қайтарады.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген `dateTime` күн мен уақыт мәнінің алдыңғы айлар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы айда болған берілген мән болғанда "жалған" мәнін қайтарады.

-   `dateTime`: анықталатын `date`, `datetime` немесе `datetimezone` мәні.
-   `months`: айлар саны.


## Examples

### Example #1
Ағымдағы жүйе уақытынан бұрынғы айдың алдыңғы екі ай ішінде екенін анықтаңыз.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
