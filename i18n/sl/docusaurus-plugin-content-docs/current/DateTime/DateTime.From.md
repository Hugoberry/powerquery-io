---
title: DateTime.From
---

# DateTime.From


## Description

Ustvari vrednost &#34;datetime&#34; iz dane vrednosti.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Vrne vrednost <code>datetime</code> iz navedene vrednosti <code>value</code>. Navedete lahko tudi izbirni parameter <code>culture</code> (na primer "sl-SI").Če je navedena vrednost <code>value</code> <code>null</code>, <code>DateTime.From</code> vrne <code>null</code>. Če je navedena vrednost <code>value</code> <code>datetime</code>, je vrnjena vrednost <code>value</code>. V vrednost <code>datetime</code> lahko pretvorite vrednosti teh vrst:      <ul>        <li><code>text</code>: vrednost <code>datetime</code> iz predstavitve v obliki besedila. Za podrobnosti glejte <code>DateTime.FromText</code>.</li>        <li><code>date</code>: <code>datetime</code> z vrednostjo <code>value</code> kot komponento "date" in <code>12:00:00 AM</code> kot komponento "time".</li>        <li><code>datetimezone</code>: lokalni ekvivalent <code>datetime</code> za <code>value</code>.</li>        <li><code>time</code>: <code>datetime</code> z vrednostjo "date", ki ustreza datumu avtomatizacije OLE <code>0</code> kot komponento "date" in <code>value</code> kot komponento "time".</li>        <li><code>number</code>: <code>datetime</code> z vrednostjo, ki ustreza datumu avtomatizacije OLE, izraženo z <code>value</code>. </li>      </ul>Če je vrednost <code>value</code> katere koli druge vrste, je vrnjena napaka.


## Examples

### Example #1 
Pretvorite &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; v vrednost &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Pretvorite &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; v vrednost &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
