---
title: Int32.From
---

# Int32.From


Erstellt einen ganzzahligen 32-Bit-Wert aus dem angegebenen Wert.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Gibt einen ganzzahligen 32-Bit-<code>number</code>-Wert aus dem angegebenen <code>value</code>-Wert zurück. Wenn der angegebene <code>value</code>-Wert <code>null</code> ist, gibt <code>Int32.From</code> <code>null</code> zurück. Wenn der angegebene <code>value</code>-Wert ein <code>number</code>-Wert aus dem 32-Bit-Ganzzahlbereich ohne Bruchteil ist, wird <code>value</code> zurückgegeben. Wenn ein Bruchteil vorhanden ist, wird der Wert mit dem angegebenen Rundungsmodus gerundet. Der Standardrundungsmodus ist <code>RoundingMode.ToEven</code>. Wenn der <code>value</code>-Wert einen anderen Typ aufweist, wird er erst mit <code>Number.FromText</code> in einen <code>number</code>-Wert konvertiert. Die verfügbaren Rundungsmodi finden Sie unter <code>Number.Round</code>. Optional kann auch ein Element vom Typ „<code>culture</code>“ angegeben werden (Beispiel: „de-DE“).


## Examples

### Example #1 
Ruft den ganzzahligen 32-Bit-&lt;code&gt;number&lt;/code&gt;-Wert &lt;code&gt;&#34;4&#34;&lt;/code&gt; ab.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Ruft den ganzzahligen 32-Bit-&lt;code&gt;number&lt;/code&gt;-Wert &lt;code&gt;&#34;4,5&#34;&lt;/code&gt; mithilfe von &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt; ab.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
