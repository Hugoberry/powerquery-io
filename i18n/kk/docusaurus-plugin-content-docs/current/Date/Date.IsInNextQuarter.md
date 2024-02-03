---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


## Description

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің келесі тоқсанда болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы тоқсанда болған берілген мән болғанда &#34;жалған&#34; мәнін қайтарады.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Details

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген <code>dateTime</code> күн мен уақыт мәні келесі тоқсанда болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы тоқсанда болған берілген мән болғанда "жалған" мәнін қайтарады.      <ul>      <li><code>dateTime</code>: анықталатын <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      </ul>


## Examples

### Example #1 
Ағымдағы жүйелік уақыттан кейінгі тоқсан келесі тоқсанда екенін анықтау.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
