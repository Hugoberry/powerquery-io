---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Ustvari vrednost &#34;datetimezone&#34; iz dane vrednosti.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Iz navedene vrednosti <code>value</code> vrne vrednost <code>datetimezone</code>. navedete lahko tudi izbirni parameter <code>culture</code> (na primer "en-US").Če je za navedeni parameter <code>value</code> vrednost <code>null</code>, <code>DateTimeZone.From</code> vrne vrednost <code>null</code>. Če je za navedeni parameter <code>value</code> vrednost <code>datetimezone</code>, je vrnjena vrednost <code>value</code>. V vrednost <code>datetimezone</code> lahko pretvorite te vrste vrednosti:      <ul>        <li><code>text</code>: vrednost <code>datetimezone</code> iz predstavitve v obliki besedila. Za podrobnosti glejte <code>DateTimeZone.FromText</code>.</li>        <li><code>date</code>: <code>datetimezone</code> z vrednostjo <code>value</code> kot komponento datuma, <code>12:00:00 AM</code> kot komponento časa in odmikom, ki ustreza lokalnemu časovnemu pasu.</li>        <li><code>datetime</code>: <code>datetimezone</code> z vrednostjo <code>value</code> kot datum in čas ter odmikom, ki ustreza lokalnemu časovnemu pasu.</li>        <li><code>time</code>: <code>datetimezone</code> z datumom, ki ustreza datumu avtomatizacije OLE <code>0</code>, kot komponento datuma, <code>value</code> kot komponento časa in odmikom, ki ustreza lokalnemu časovnemu pasu.</li>        <li><code>number</code>: <code>datetimezone</code> z datumom in časom, ki ustreza datumu avtomatizacije OLE, izraženem z vrednostjo <code>value</code>, in odmikom, ki ustreza lokalnemu časovnemu pasu.</li>      </ul>Če je vrednost <code>value</code> katere koli druge vrste, je vrnjena napaka.


## Examples

### Example #1 
Pretvorite &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; v vrednost &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
