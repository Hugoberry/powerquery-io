---
title: Decimal.From
---

# Decimal.From


## Description

Erstellt einen Dezimalwert aus dem angegebenen Wert.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Gibt einen Dezimal-<code>number</code>-Wert aus dem angegebenen <code>value</code>-Wert zurück. Wenn der angegebene <code>value</code>-Wert <code>null</code> ist, gibt <code>Decimal.From</code> <code>null</code> zurück. Wenn der angegebene <code>value</code>-Wert <code>number</code> im Bereich von „Dezimal“ liegt, wird „<code>value</code>“ zurückgegeben. Andernfalls wird ein Fehler zurückgegeben. Wenn der <code>value</code>-Wert einen anderen Typ aufweist, wird er erst mit <code>Number.FromText</code> in einen <code>number</code>-Wert konvertiert. Optional kann auch ein Element vom Typ „<code>culture</code>“ angegeben werden (Beispiel: „de-DE“).


## Examples

### Example #1 
Ruft den &lt;code&gt;number&lt;/code&gt;-Wert &lt;code&gt;&#34;4,5&#34;&lt;/code&gt; ab.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
