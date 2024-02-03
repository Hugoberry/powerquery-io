---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, бұл күн мәнінің өткен айлар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы айда болған берілген мән болғанда &#34;жалған&#34; мәнін қайтарады.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Жүйедегі ағымдағы күн мен уақыт арқылы анықталғандай, берілген <code>dateTime</code> күн мен уақыт мәнінің алдыңғы айлар санында болатынын не болмайтынын көрсетеді. Бұл функция ағымдағы айда болған берілген мән болғанда "жалған" мәнін қайтарады.      <ul>      <li><code>dateTime</code>: анықталатын <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      <li><code>months</code>: айлар саны.</li>      </ul>


## Examples

### Example #1 
Ағымдағы жүйе уақытынан бұрынғы айдың алдыңғы екі ай ішінде екенін анықтаңыз.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
