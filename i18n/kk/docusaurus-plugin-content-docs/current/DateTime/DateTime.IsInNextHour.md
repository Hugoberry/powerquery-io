---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


## Description

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мен уақыт мәнінің келесі сағатта болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы сағатта болған берілген мән болғанда &#34;жалған&#34; мәнін қайтарады.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Details

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген <code>dateTime</code> күн мен уақыт мәні келесі сағатта болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы сағатта болған берілген мән болғанда "жалған" мәнін қайтарады.      <ul>      <li><code>dateTime</code>: анықталатын <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      </ul>


## Examples

### Example #1 
Ағымдағы жүйе уақытынан кейінгі сағаттың келесі сағатта екендігін анықтау.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
