---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


## Description

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің өткен жылдар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы жылда болған берілген мән болғанда &#34;жалған&#34; мәнін қайтарады.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген <code>dateTime</code> күн мен уақыт мәнінің алдыңғы жылдар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы жылда болған берілген мән болғанда "жалған" мәнін қайтарады.      <ul>      <li><code>dateTime</code>: анықталатын <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      <li><code>years</code>: жылдар саны.</li>      </ul>


## Examples

### Example #1 
Ағымдағы жүйе уақытынан бұрынғы жылдың алдыңғы екі жыл ішінде екенін анықтаңыз.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
