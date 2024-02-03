---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


## Description

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мен уақыт мәнінің келесі минуттар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы минутта болған берілген мән болғанда &#34;жалған&#34; мәнін қайтарады.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген <code>dateTime</code> күн мен уақыт мәні келесі минуттар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы минутта болған берілген мән болғанда "жалған" мәнін қайтарады.      <ul>      <li><code>dateTime</code>: анықталатын <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      <li><code>minutes</code>: минуттар саны.</li>      </ul>


## Examples

### Example #1 
Ағымдағы жүйе уақытынан кейінгі минуттың келесі екі минутта екендігін анықтау.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
