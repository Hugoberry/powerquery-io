---
title: Percentage.From
---

# Percentage.From


## Description

Gibt einen Prozentwert aus dem angegebenen Wert zurück.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Gibt einen <code>Prozentwert</code> aus dem angegebenen <code>value</code>-Wert zurück. Wenn der angegebene <code>value</code>-Wert <code>NULL</code> lautet, gibt <code>Percentage.From</code> den Wert <code>NULL</code> zurück. Wenn der angegebene <code>value</code>-Wert <code>Text</code> mit einem nachfolgenden Prozentzeichen ist, wird die konvertierte Dezimalzahl zurückgegeben. Andernfalls wird der Wert mit <code>Number.From</code> in einen <code>number</code>-Wert konvertiert. Optional kann auch ein Element vom Typ „<code>culture</code>“ angegeben werden (Beispiel: „de-DE“).


## Examples

### Example #1 
Hiermit rufen Sie den &lt;code&gt;Prozentwert&lt;/code&gt; aus &lt;code&gt;&#34;12,3 %&#34;&lt;/code&gt; ab.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
