---
title: Logical.From
---

# Logical.From


## Description

Erstellt einen logischen Wert auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Gibt einen <code>logical</code>-Wert auf der Grundlage des angegebenen Elements vom Typ „<code>value</code>“ zurück. Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>NULL</code>, wird von <code>Logical.From</code> der Wert <code>NULL</code> zurückgegeben. Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>logical</code>, wird „<code>value</code>“ zurückgegeben. Werte folgender Art können in einen <code>logical</code>-Wert konvertiert werden:      <ul>        <li><code>text</code>: Ein <code>logical</code>-Wert auf der Grundlage des Textwerts (entweder <code>TRUE</code> oder <code>FALSE</code>). Ausführlichere Informationen finden Sie unter <code>Logical.FromText</code>.</li>                <li><code>number</code>: <code>false</code>, falls „<code>value</code>“ den Wert <code>0</code> besitzt, andernfalls <code>true</code>.</li>      </ul>Handelt es sich bei „<code>value</code>“ um einen anderen Typ, wird ein Fehler zurückgegeben.


## Examples

### Example #1 
Konvertiert &lt;code&gt;2&lt;/code&gt; in einen &lt;code&gt;logical&lt;/code&gt;-Wert.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
