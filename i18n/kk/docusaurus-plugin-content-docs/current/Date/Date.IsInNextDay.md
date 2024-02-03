---
title: Date.IsInNextDay
---

# Date.IsInNextDay


## Description

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің келесі күнде болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы күнде болған берілген мән болғанда &#34;жалған&#34; мәнін қайтарады.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Details

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген <code>dateTime</code> күн мен уақыт мәні келесі күнде болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы күнде болған берілген мән болғанда "жалған" мәнін қайтарады.      <ul>      <li><code>dateTime</code>: анықталатын <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      </ul>


## Examples

### Example #1 
Ағымдағы жүйелік уақыттан кейінгі күн келесі күнде екенін анықтау.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
