---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мен уақыт мәнінің келесі сағаттар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы сағатта болған берілген мән болғанда &#34;жалған&#34; мәнін қайтарады.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген <code>dateTime</code> күн мен уақыт мәні келесі сағаттар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы сағатта болған берілген мән болғанда "жалған" мәнін қайтарады.      <ul>      <li><code>dateTime</code>: анықталатын <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      <li><code>hours</code>: сағаттар саны.</li>      </ul>


## Examples

### Example #1 
Ағымдағы жүйе уақытынан кейінгі сағаттың келесі екі сағатта екендігін анықтау.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
