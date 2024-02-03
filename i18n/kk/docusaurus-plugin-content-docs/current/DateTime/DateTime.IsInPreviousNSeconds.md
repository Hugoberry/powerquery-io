---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


## Description

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мен уақыт мәнінің өткен секундтар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы секундта болған берілген мән болғанда &#34;жалған&#34; мәнін қайтарады.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген <code>dateTime</code> күн мен уақыт мәні өткен секундтар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы секундта болған берілген мән болғанда "жалған" мәнін қайтарады.      <ul>      <li><code>dateTime</code>: анықталатын <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      <li><code>seconds</code>: секундтар саны.</li>      </ul>


## Examples

### Example #1 
Ағымдағы жүйе уақытына дейінгі секундтың өткен екі секундта екендігін анықтау.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
