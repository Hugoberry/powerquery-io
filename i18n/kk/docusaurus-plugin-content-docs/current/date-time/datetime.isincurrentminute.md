---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл datetime мәні ағымдағы минутта болатынын не болмайтынын көрсетеді.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген `dateTime` datetime мәні ағымдағы минутта болатынын не болмайтынын көрсетеді.

-   `dateTime`: анықталатын `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
Ағымдағы жүйе уақытының ағымдағы минутта екендігін анықтау.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
