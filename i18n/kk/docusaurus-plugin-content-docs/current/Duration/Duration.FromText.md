---
title: Duration.FromText
---

# Duration.FromText


## Description

Мәтіндік өткен уақыт түрінен (к.у:м:с) ұзақтық мәнін қайтарады.


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Көрсетілген мәтіннен ұзақтық мәнін қайтарады, <code>text</code>. Бұл функция келесі пішімдерді талдай алады: <ul>        <li>(-)сс:мм(:сс(.бб)) </li>        <li>(-)ккк(.сс:мм(:сс(.бб))) </li> </ul>        <br />        (Барлық ауқымдар қамтылған)<br />        ккк: Күндердің саны.<br />        сс: Сағаттардың саны, 0 мен 23 аралығы.<br />        аа: Минуттардың саны, 0 мен 59 аралығы.<br />        сс: Секундтардың саны, 0 мен 59 аралығы.<br />        бб: Секунд бөлігі, 0 мен 9999999 аралығы.


## Examples

### Example #1 
&lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; мәнін &lt;code&gt;duration&lt;/code&gt; мәніне түрлендіру.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
