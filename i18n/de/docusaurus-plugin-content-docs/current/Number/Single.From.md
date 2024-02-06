---
title: Single.From
---

# Single.From


Erstellt einen Single-Wert aus dem angegebenen Wert.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Gibt einen Single-<code>number</code>-Wert aus dem angegebenen <code>value</code>-Wert zurück. Wenn der angegebene <code>value</code>-Wert <code>null</code> ist, gibt <code>Single.From</code> <code>null</code> zurück. Wenn der angegebene <code>value</code>-Wert <code>number</code> im Bereich von „Single“ liegt, wird „<code>value</code>“ zurückgegeben. Andernfalls wird ein Fehler zurückgegeben. Wenn der <code>value</code>-Wert einen anderen Typ aufweist, wird er erst mit <code>Number.FromText</code> in einen <code>number</code>-Wert konvertiert. Optional kann auch ein Element vom Typ „<code>culture</code>“ angegeben werden (Beispiel: „de-DE“).


## Examples

### Example #1 
Ruft den Single-&lt;code&gt;number&lt;/code&gt;-Wert &lt;code&gt;&#34;1,5&#34;&lt;/code&gt; ab.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
