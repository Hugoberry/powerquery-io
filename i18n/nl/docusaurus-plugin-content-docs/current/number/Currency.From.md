---
title: Currency.From
---

# Currency.From


Retourneert een valutawaarde van de opgegeven waarde.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Hiermee wordt een <code>currency</code>-waarde geretourneerd vanuit de opgegeven <code>value</code>. Als de opgegeven waarde <code>value</code> <code>null</code> is, wordt door <code>Currency.From</code> de waarde <code>null</code> geretourneerd. Als de opgegeven <code>value</code> een <code>number</code> is binnen het valutabereik, wordt het fractionele deel van de <code>value</code> afgerond op vier decimalen en geretourneerd. Als <code>value</code> van een ander type is, wordt deze eerst geconverteerd naar een <code>number</code> met behulp van <code>Number.FromText</code>. Het geldige bereik voor valuta is <code>-922.337.203.685.477,5808</code> tot en met <code>922.337.203.685.477,5807</code>. Raadpleeg <code>Number.Round</code> voor de beschikbare afrondingsmodi; de standaardmodus is <code>RoundingMode.ToEven</code>. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1 
De&lt;code&gt;currency&lt;/code&gt;-waarde van &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; ophalen.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
De &lt;code&gt;currency&lt;/code&gt;-waarde van &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; ophalen met &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
