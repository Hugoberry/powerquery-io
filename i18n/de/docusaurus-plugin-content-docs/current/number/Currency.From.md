---
title: Currency.From
---

# Currency.From


Gibt einen currency-Wert aus dem angegebenen Wert zurück.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Gibt einen <code>currency</code>-Wert aus dem angegebenen <code>value</code>-Wert zurück. Wenn der angegebene <code>value</code>-Wert <code>null</code> ist, gibt <code>Currency.From</code> <code>null</code> zurück. Wenn der angegebene <code>value</code>-Wert <code>number</code> innerhalb des Währungsbereichs ist, wird der Bruchteil von „<code>value</code>“ auf 4 Dezimalstellen gerundet und zurückgegeben. Wenn der angegebene <code>value</code>-Wert einen anderen Typ aufweist, wird er erst mit <code>Number.FromText</code> in einen <code>number</code>-Wert konvertiert. Der gültige Währungsbereich ist <code>-922.337.203.685.477,5808</code> bis <code>922.337.203.685.477,5807</code>. Die verfügbaren Rundungsmodi finden Sie unter <code>Number.Round</code>. Die Standardeinstellung lautet <code>RoundingMode.ToEven</code>. Optional kann auch ein Element vom Typ „<code>culture</code>“ angegeben werden (Beispiel: „de-DE“).


## Examples

### Example #1 
&lt;code&gt;currency&lt;/code&gt;-Wert von &lt;code&gt;&#34;1,23455&#34;&lt;/code&gt; abrufen.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Rufen Sie den &lt;code&gt;currency&lt;/code&gt;-Wert von &lt;code&gt;&#34;1,23455&#34;&lt;/code&gt; mithilfe von &lt;code&gt;RoundingMode.Down&lt;/code&gt; ab.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
