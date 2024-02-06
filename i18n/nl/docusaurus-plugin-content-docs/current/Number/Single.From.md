---
title: Single.From
---

# Single.From


Maakt een waarde voor Enkel van de opgegeven waarde.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Hiermee wordt een Single <code>number</code>-waarde geretourneerd vanuit de opgegeven <code>value</code>. Als de opgegeven <code>value</code> de waarde <code>null</code> heeft, wordt door <code>Single.From</code> de waarde <code>null</code> geretourneerd. Als de opgegeven <code>value</code> een <code>number</code>-waarde heeft binnen het bereik van Single, wordt <code>value</code> geretourneerd. In andere gevallen wordt een fout geretourneerd. Als <code>value</code> van een ander type is, wordt deze eerst geconverteerd naar een <code>number</code> met behulp van <code>Number.FromText</code>. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1 
De &lt;code&gt;number&lt;/code&gt;-waarde voor Enkel uit &lt;code&gt;&#34;1.5&#34;&lt;/code&gt; ophalen.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
