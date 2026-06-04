---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің өткен жылда болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы жылда болған берілген мән болғанда "жалған" мәнін қайтарады.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Remarks

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген `dateTime` күн мен уақыт мәні өткен жылда болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы жылда болған берілген мән болғанда "жалған" мәнін қайтарады.

-   `dateTime`: анықталатын `date`, `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
Ағымдағы жүйелік уақыттан бұрынғы жыл алдыңғы жылда екенін анықтау.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
