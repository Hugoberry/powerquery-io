---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің келесі жылдар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы жылда болған берілген мән болғанда &#34;жалған&#34; мәнін қайтарады.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген <code>dateTime</code> күн мен уақыт мәнінің келесі жылдар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы жылда болған берілген мән болғанда "жалған" мәнін қайтарады.      <ul>      <li><code>dateTime</code>: анықталатын <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      <li><code>years</code>: жылдар саны.</li>      </ul>


## Examples

### Example #1 
Ағымдағы жүйе уақытынан кейінгі жылдың келесі екі жыл ішінде екенін анықтаңыз.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
