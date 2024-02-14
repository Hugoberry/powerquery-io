---
title: Duration.From
---

# Duration.From


Erstellt eine Dauer auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Gibt einen <code>duration</code>-Wert auf der Grundlage des angegebenen Elements vom Typ „<code>value</code>“ zurück. Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>NULL</code>, wird von <code>Duration.From</code> der Wert <code>NULL</code> zurückgegeben. Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>duration</code>, wird „<code>value</code>“ zurückgegeben. Werte folgender Art können in einen <code>duration</code>-Wert konvertiert werden:      <ul>        <li><code>text</code>: Ein <code>duration</code>-Wert auf der Grundlage verstrichener Zeit im Textformat (d.h:m:s). Ausführlichere Informationen finden Sie unter <code>Duration.FromText</code>.</li>        <li><code>number</code>: Eine <code>duration</code>-Entsprechung für die durch „<code>value</code>“ ausgedrückte Anzahl ganzer und anteiliger Tage.</li>      </ul>Handelt es sich bei „<code>value</code>“ um einen anderen Typ, wird ein Fehler zurückgegeben.


## Examples

### Example #1 
Konvertiert &lt;code&gt;2.525&lt;/code&gt; in einen &lt;code&gt;duration&lt;/code&gt;-Wert.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
