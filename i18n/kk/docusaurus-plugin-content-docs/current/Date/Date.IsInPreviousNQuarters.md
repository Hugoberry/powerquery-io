---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


## Description

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің өткен тоқсандар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы тоқсанда болған берілген мән болғанда &#34;жалған&#34; мәнін қайтарады.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген <code>dateTime</code> күн мен уақыт мәнінің алдыңғы тоқсандар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы тоқсанда болған берілген мән болғанда "жалған" мәнін қайтарады.      <ul>      <li><code>dateTime</code>: анықталатын <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      <li><code>quarters</code>: тоқсандар саны.</li>      </ul>


## Examples

### Example #1 
Ағымдағы жүйе уақытынан бұрынғы тоқсанның алдыңғы екі тоқсан ішінде екенін анықтаңыз.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
