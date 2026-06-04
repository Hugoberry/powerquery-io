---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл datetime мәнінің ағымдағы сағатта болатынын не болмайтынын көрсетеді.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген `dateTime` datetime мәні ағымдағы сағатта болатынын не болмайтынын көрсетеді.

-   `dateTime`: анықталатын `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
Ағымдағы жүйе уақытының ағымдағы сағатта екендігін анықтау.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
