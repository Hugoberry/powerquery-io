---
title: Int8.From
---

# Int8.From


## Description

Maakt een 8-bits geheel getal met teken van de opgegeven waarde.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Hiermee wordt een ondertekende 8-bits <code>number</code>-waarde geretourneerd als geheel getal met teken uit opgegeven <code>value</code>. Als de opgegeven <code>value</code> de waarde <code>null</code> heeft, wordt door <code>Int8.From</code> de waarde <code>null</code> geretourneerd. Als de opgegeven <code>value</code> een <code>number</code>-waarde heeft binnen het bereik van een ondertekend 8-bits geheel getal met teken zonder een fractioneel deel, wordt <code>value</code> geretourneerd. Als het getal een fractioneel deel heeft, wordt het afgerond met de opgegeven afrondingsmodus. De standaardafrondingsmodus is <code>RoundingMode.ToEven</code>. Als <code>value</code> van een ander type is, wordt deze eerst geconverteerd naar een <code>nummer</code> met behulp van <code>Number.FromText</code>. Raadpleeg <code>Number.Round</code> voor de beschikbare afrondingsmodi. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1 
De 8-bits &lt;code&gt;number&lt;/code&gt;-waarde als geheel getal met teken uit &lt;code&gt;&#34;4&#34;&lt;/code&gt; ophalen.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
De 8-bits &lt;code&gt;number&lt;/code&gt;-waarde als geheel getal met teken uit &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; ophalen met &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
