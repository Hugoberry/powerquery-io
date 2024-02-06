---
title: Number.From
---

# Number.From


Erstellt eine Zahl auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Gibt einen <code>number</code>-Wert auf der Grundlage des angegebenen Elements vom Typ „<code>value</code>“ zurück. Optional kann auch ein Element vom Typ „<code>culture</code>“ angegeben werden (Beispiel: „de-DE“).Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>NULL</code>, wird von <code>Number.From</code> der Wert <code>NULL</code> zurückgegeben. Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>number</code>, wird „<code>value</code>“ zurückgegeben. Werte folgender Art können in einen <code>number</code>-Wert konvertiert werden:      <ul>        <li><code>text</code>: Ein <code>number</code>-Wert auf der Grundlage einer Textdarstellung. Behandelt werden allgemeine Textformate („15“, „3.423,10“, „5.0E-10“). Ausführlichere Informationen finden Sie unter <code>Number.FromText</code>.</li>        <li><code>logical</code>: 1 für <code>true</code>, 0 für <code>false</code>.</li>        <li><code>datetime</code>: Eine Gleitkommazahl mit doppelter Genauigkeit, die eine Entsprechung des OLE-Automatisierungsdatums enthält.</li>        <li><code>datetimezone</code>: Eine Gleitkommazahl mit doppelter Genauigkeit, die eine Entsprechung des OLE-Automatisierungsdatums für das lokale Datum und die lokale Uhrzeit von „<code>value</code>“ enthält.</li>        <li><code>date</code>: Eine Gleitkommazahl mit doppelter Genauigkeit, die eine Entsprechung des OLE-Automatisierungsdatums enthält.</li>        <li><code>time</code>: Ausgedrückt in anteiligen Tagen.</li>        <li><code>duration</code>: Ausgedrückt in ganzen und anteiligen Tagen.</li>        </ul>Handelt es sich bei „<code>value</code>“ um einen anderen Typ, wird ein Fehler zurückgegeben.


## Examples

### Example #1 
Ruft den &lt;code&gt;number&lt;/code&gt;-Wert von &lt;code&gt;&#34;4&#34;&lt;/code&gt; ab.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Ruft den &lt;code&gt;number&lt;/code&gt;-Wert von &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt; ab.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Hiermit rufen Sie den &lt;code&gt;Zahlenwert&lt;/code&gt; von &lt;code&gt;&#34;12,3 %&#34;&lt;/code&gt; ab.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
