---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің өткен тоқсанда болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы тоқсанда болған берілген мән болғанда "жалған" мәнін қайтарады.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген `dateTime` күн мен уақыт мәні өткен тоқсанда болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы тоқсанда болған берілген мән болғанда "жалған" мәнін қайтарады.

-   `dateTime`: анықталатын `date`, `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
Ағымдағы жүйелік уақыттан бұрынғы тоқсан алдыңғы тоқсанда екенін анықтау.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
