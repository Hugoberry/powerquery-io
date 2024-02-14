---
title: Int64.From
---

# Int64.From


Maakt een 64-bits geheel getal van de opgegeven waarde.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Hiermee wordt een 64-bits <code>number</code>-waarde geretourneerd als geheel getal vanuit de opgegeven <code>value</code>. Als de opgegeven waarde <code>value</code> <code>null</code> is, wordt door <code>Int64.From</code> de waarde <code>null</code> geretourneerd. Als de opgegeven <code>value</code> een <code>number</code> is binnen het bereik van een 64-bits geheel getal zonder een fractioneel deel, wordt <code>value</code> geretourneerd. Als het cijfer een fractioneel deel heeft, wordt het afgerond volgens de opgegeven afrondingsmodus. De standaardafrondingsmodus is <code>RoundingMode.ToEven</code>. Als <code>value</code> van een ander type is, wordt deze eerst geconverteerd naar een <code>nummer</code> met behulp van <code>Number.FromText</code>. Raadpleeg <code>Number.Round</code> voor de beschikbare afrondingsmodi. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1 
64-bit &lt;code&gt;number&lt;/code&gt;-waarde als geheel getal van &lt;code&gt;&#34;4&#34;&lt;/code&gt; ophalen.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
64-bits &lt;code&gt;number&lt;/code&gt;-waarde als geheel getal van &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; ophalen met &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
