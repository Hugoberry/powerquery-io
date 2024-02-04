---
title: Date.From
---

# Date.From


## Description

Erstellt ein Datum auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Gibt einen <code>date</code>-Wert auf der Grundlage des angegebenen Elements vom Typ „<code>value</code>“ zurück. Optional kann auch ein Element vom Typ „<code>culture</code>“ angegeben werden (Beispiel: „de-DE“).Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>NULL</code>, wird von <code>Date.From</code> der Wert <code>NULL</code> zurückgegeben. Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>date</code>, wird „<code>value</code>“ zurückgegeben. Werte folgender Art können in einen <code>date</code>-Wert konvertiert werden:      <ul>        <li><code>text</code>: Ein <code>date</code>-Wert auf der Grundlage einer Textdarstellung. Ausführlichere Informationen finden Sie unter <code>Date.FromText</code>.</li>        <li><code>datetime</code>: Die Datumskomponente des Elements vom Typ „<code>value</code>“.</li>        <li><code>datetimezone</code>: Die Datumskomponente der lokalen datetime-Entsprechung von „<code>value</code>“.</li>        <li><code>number</code>: Die Datumskomponente der durch „<code>value</code>“ ausgedrückten datetime-Entsprechung des OLE-Automatisierungsdatums.</li>      </ul>Handelt es sich bei „<code>value</code>“ um einen anderen Typ, wird ein Fehler zurückgegeben.


## Examples

### Example #1 
Konvertiert &lt;code&gt;43910&lt;/code&gt; in einen &lt;code&gt;date&lt;/code&gt;-Wert.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Konvertiert &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; in einen &lt;code&gt;date&lt;/code&gt;-Wert.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
