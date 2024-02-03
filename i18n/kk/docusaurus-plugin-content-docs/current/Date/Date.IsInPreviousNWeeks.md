---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің өткен апталар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы аптада болған берілген мән болғанда &#34;жалған&#34; мәнін қайтарады.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген <code>dateTime</code> күн мен уақыт мәнінің алдыңғы апталар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы аптада болған берілген мән болғанда "жалған" мәнін қайтарады.      <ul>      <li><code>dateTime</code>: анықталатын <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      <li><code>weeks</code>: апталар саны.</li>      </ul>


## Examples

### Example #1 
Ағымдағы жүйе уақытынан бұрынғы аптаның алдыңғы екі апта ішінде екенін анықтаңыз.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
