---
title: Binary.From
---

# Binary.From


Erstellt einen Binärwert auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Gibt einen <code>binary</code>-Wert auf der Grundlage des angegebenen Elements vom Typ „<code>value</code>“ zurück. Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>NULL</code>, wird von <code>Binary.From</code> der Wert <code>NULL</code> zurückgegeben.  Besitzt das angegebene Element vom Typ „<code>value</code>“ den Wert <code>binary</code>, wird „<code>value</code>“ zurückgegeben. Werte folgender Art können in einen <code>binary</code>-Wert konvertiert werden:      <ul>        <li><code>text</code>: Ein <code>binary</code>-Wert aus der Textdarstellung. Ausführlichere Informationen finden Sie unter <code>Binary.FromText</code>.</li>      </ul>Handelt es sich bei „<code>value</code>“ um einen anderen Typ, wird ein Fehler zurückgegeben.


## Examples

### Example #1 
Ruft den &lt;code&gt;binary&lt;/code&gt;-Wert von &lt;code&gt;&#34;1011&#34;&lt;/code&gt; ab.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
