---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


## Description

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің өткен күндер санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы күнде болған берілген мән болғанда &#34;жалған&#34; мәнін қайтарады.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген <code>dateTime</code> күн мен уақыт мәнінің алдыңғы күндер санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы күнде болған берілген мән болғанда "жалған" мәнін қайтарады.      <ul>      <li><code>dateTime</code>: анықталатын <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      <li><code>days</code>: күндер саны.</li>      </ul>


## Examples

### Example #1 
Ағымдағы жүйе уақытынан бұрынғы күннің алдыңғы екі күн ішінде екенін анықтаңыз.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
