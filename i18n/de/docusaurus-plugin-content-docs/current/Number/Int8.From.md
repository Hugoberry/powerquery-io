---
title: Int8.From
---

# Int8.From


## Description

Erstellt einen signierten ganzzahligen 8-Bit-Wert aus dem angegebenen Wert.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Gibt einen signierten ganzzahligen 8-Bit-<code>number</code>-Wert aus dem angegebenen <code>value</code>-Wert zurück. Wenn der angegebene <code>value</code>-Wert <code>null</code> ist, gibt <code>Int8.From</code> <code>null</code> zurück. Wenn der angegebene <code>value</code>-Wert ein <code>number</code>-Wert aus dem signierten 8-Bit-Ganzzahlbereich ohne Bruchteil ist, wird <code>value</code> zurückgegeben. Wenn ein Bruchteil vorhanden ist, wird der Wert mit dem angegebenen Rundungsmodus gerundet. Der Standardrundungsmodus ist <code>RoundingMode.ToEven</code>. Wenn der <code>value</code>-Wert einen anderen Typ aufweist, wird er erst mit <code>Number.FromText</code> in einen <code>number</code>-Wert konvertiert. Die verfügbaren Rundungsmodi finden Sie unter <code>Number.Round</code>. Optional kann auch ein Element vom Typ „<code>culture</code>“ angegeben werden (Beispiel: „de-DE“).


## Examples

### Example #1 
Ruft den signierten ganzzahligen 8-Bit-&lt;code&gt;number&lt;/code&gt;-Wert &lt;code&gt;&#34;4&#34;&lt;/code&gt; ab.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Ruft den signierten ganzzahligen 8-Bit-&lt;code&gt;number&lt;/code&gt;-Wert &lt;code&gt;&#34;4,5&#34;&lt;/code&gt; mithilfe von &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt; ab.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
