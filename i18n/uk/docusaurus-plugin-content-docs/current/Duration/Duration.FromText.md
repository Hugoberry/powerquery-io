---
title: Duration.FromText
---

# Duration.FromText


## Description

Повертає значення тривалості з текстових форм часу, що минув (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Повертає значення тривалості з указаного тексту <code>text</code>. За допомогою цієї функції можна проаналізувати вказані нижче формати. <ul>        <li>(-)гг:хх(:сс(.чч)) </li>        <li>(-)ддд(.гг:хх(:сс(.чч))) </li> </ul>        <br />        (Усі діапазони включають граничні значення)<br />        ддд: кількість днів.<br />        гг: кількість годин, від 0 до 23.<br />        хх: кількість хвилин, від 0 до 59.<br />        сс: кількість секунд, від 0 до 59.<br />        чч: частка секунди, від 0 до 9999999.


## Examples

### Example #1 
Перетворити &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; на значення &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
