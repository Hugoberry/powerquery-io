---
title: Time.From
---

# Time.From


Erstellt eine Uhrzeit auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Gibt einen <code>time</code>-Wert auf der Grundlage des angegebenen Elements vom Typ „<code>value</code>“ zurück. Optional kann auch ein Element vom Typ „<code>culture</code>“ angegeben werden (Beispiel: „de-DE“).Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>NULL</code>, wird von <code>Time.From</code> der Wert <code>NULL</code> zurückgegeben. Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>time</code>, wird „<code>value</code>“ zurückgegeben. Werte folgender Art können in einen <code>time</code>-Wert konvertiert werden:      <ul>        <li><code>text</code>: Ein <code>time</code>-Wert auf der Grundlage einer Textdarstellung. Ausführlichere Informationen finden Sie unter <code>Time.FromText</code>.</li>        <li><code>datetime</code>: Die Uhrzeitkomponente von „<code>value</code>“.</li>        <li><code>datetimezone</code>: Die Uhrzeitkomponente der lokalen datetime-Entsprechung von „<code>value</code>“.</li>        <li><code>number</code>: Eine <code>time</code>-Entsprechung für die durch „<code>value</code>“ ausgedrückte Anzahl anteiliger Tage. Ist „<code>value</code>“ negativ oder größer/gleich 1, wird ein Fehler zurückgegeben.</li>      </ul>Handelt es sich bei „<code>value</code>“ um einen anderen Typ, wird ein Fehler zurückgegeben.


## Examples

### Example #1 
Konvertiert &lt;code&gt;0.7575&lt;/code&gt; in einen &lt;code&gt;time&lt;/code&gt;-Wert.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Konvertiert &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; in einen &lt;code&gt;time&lt;/code&gt;-Wert.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
