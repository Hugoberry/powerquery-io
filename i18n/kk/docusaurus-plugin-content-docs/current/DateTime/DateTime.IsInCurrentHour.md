---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл datetime мәнінің ағымдағы сағатта болатынын не болмайтынын көрсетеді.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген <code>dateTime</code> datetime мәні ағымдағы сағатта болатынын не болмайтынын көрсетеді.      <ul>      <li><code>dateTime</code>: анықталатын <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      </ul>


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
