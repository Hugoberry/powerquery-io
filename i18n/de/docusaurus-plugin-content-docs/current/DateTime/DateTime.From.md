---
title: DateTime.From
---

# DateTime.From


## Description

Erstellt einen datetime-Wert auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Gibt einen <code>datetime</code>-Wert auf der Grundlage des angegebenen Elements vom Typ „<code>value</code>“ zurück. Optional kann auch ein Element vom Typ „<code>culture</code>“ angegeben werden (Beispiel: „de-DE“).Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>NULL</code>, wird von <code>DateTime.From</code> der Wert <code>NULL</code> zurückgegeben. Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>datetime</code>, wird „<code>value</code>“ zurückgegeben. Werte folgender Art können in einen <code>datetime</code>-Wert konvertiert werden:      <ul>        <li><code>text</code>: Ein <code>datetime</code>-Wert auf der Grundlage einer Textdarstellung. Ausführlichere Informationen finden Sie unter <code>DateTime.FromText</code>.</li>        <li><code>date</code>: Ein <code>datetime</code>-Wert mit „<code>value</code>“ als Datumskomponente und <code>12:00:00 AM</code> als Uhrzeitkomponente.</li>        <li><code>datetimezone</code>: Die lokale <code>datetime</code>-Entsprechung von „<code>value</code>“.</li>        <li><code>time</code>: Ein <code>datetime</code>-Wert mit der Datumsentsprechung des OLE-Automatisierungsdatums von <code>0</code> als Datumskomponente und „<code>value</code>“ als Uhrzeitkomponente.</li>        <li><code>number</code>: Eine durch „<code>value</code>“ ausgedrückte <code>datetime</code>-Entsprechung des OLE-Automatisierungsdatums. </li>      </ul>Handelt es sich bei „<code>value</code>“ um einen anderen Typ, wird ein Fehler zurückgegeben.


## Examples

### Example #1 
Konvertiert &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; in einen &lt;code&gt;datetime&lt;/code&gt;-Wert.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Konvertiert &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; in einen &lt;code&gt;datetime&lt;/code&gt;-Wert.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
