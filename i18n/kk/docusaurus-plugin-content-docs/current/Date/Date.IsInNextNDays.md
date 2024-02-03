---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


## Description

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің келесі күндер санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы күнде болған берілген мән болғанда &#34;жалған&#34; мәнін қайтарады.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген <code>dateTime</code> күн мен уақыт мәнінің келесі күндер санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы күнде болған берілген мән болғанда "жалған" мәнін қайтарады.      <ul>      <li><code>dateTime</code>: анықталатын <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      <li><code>days</code>: күндер саны.</li>      </ul>


## Examples

### Example #1 
Ағымдағы жүйе уақытынан кейінгі күннің келесі екі күн ішінде екенін анықтаңыз.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
