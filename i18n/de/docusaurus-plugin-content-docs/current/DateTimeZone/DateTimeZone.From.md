---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Erstellt einen datetimezone-Wert auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Gibt einen <code>datetimezone</code>-Wert auf der Grundlage des angegebenen Elements vom Typ <code>value</code> zurück. Optional kann auch ein Element vom Typ „<code>culture</code>“ angegeben werden (Beispiel: „de-DE“).Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>NULL</code>, wird von <code>DateTimeZone.From</code> der Wert <code>NULL</code> zurückgegeben. Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>datetimezone</code>, wird „<code>value</code>“ zurückgegeben. Werte folgender Art können in einen <code>datetimezone</code>-Wert konvertiert werden:      <ul>        <li><code>text</code>: Ein <code>datetimezone</code>-Wert auf der Grundlage einer Textdarstellung. Ausführlichere Informationen finden Sie unter <code>DateTimeZone.FromText</code>.</li>        <li><code>date</code>: Ein <code>datetimezone</code>-Wert mit „<code>value</code>“ als Datumskomponente, <code>12:00:00 AM</code> als Uhrzeitkomponente und einem entsprechenden Offset für die lokale Zeitzone.</li>        <li><code>time</code>: Ein <code>datetimezone</code>-Wert mit „<code>value</code>“ als datetime-Element und einem entsprechenden Offset für die lokale Zeitzone.</li>        <li><code>time</code>: Ein <code>datetimezone</code>-Wert mit der Datumsentsprechung des OLE-Automatisierungsdatums von <code>0</code> als Datumskomponente, mit „<code>value</code>“ als Uhrzeitkomponente und mit dem entsprechenden Offset für die lokale Zeitzone.</li>        <li><code>number</code>: Ein <code>datetimezone</code>-Wert mit der durch „<code>value</code>“ ausgedrückten datetime-Entsprechung des OLE-Automatisierungsdatums und dem entsprechenden Offset für die lokale Zeitzone.</li>      </ul>Handelt es sich bei „<code>value</code>“ um einen anderen Typ, wird ein Fehler zurückgegeben.


## Examples

### Example #1 
Konvertiert &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; in einen &lt;code&gt;datetimezone&lt;/code&gt;-Wert.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
