---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл datetime мәні ағымдағы секундта болатынын не болмайтынын көрсетеді.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген `dateTime` datetime мәні ағымдағы секундта болатынын не болмайтынын көрсетеді.

-   `dateTime`: анықталатын `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
Ағымдағы жүйе уақытының ағымдағы секундта екендігін анықтау.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
