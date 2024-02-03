---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл datetime мәні ағымдағы секундта болатынын не болмайтынын көрсетеді.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген <code>dateTime</code> datetime мәні ағымдағы секундта болатынын не болмайтынын көрсетеді.      <ul>      <li><code>dateTime</code>: анықталатын <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      </ul>


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
