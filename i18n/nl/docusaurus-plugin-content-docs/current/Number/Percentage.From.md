---
title: Percentage.From
---

# Percentage.From


Hiermee wordt een percentagewaarde geretourneerd voor een opgegeven waarde.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Hiermee wordt een <code>percentage</code>-waarde geretourneerd voor de opgegeven <code>value</code>. Als de opgegeven <code>value</code> <code>null</code> is, wordt door <code>Percentage.From</code> <code>null</code> geretourneerd. Als een opgegeven <code>value</code> een <code>text</code>-waarde met een navolgend procentteken heeft, wordt het geconverteerde decimale getal geretourneerd. Anders wordt de waarde geconverteerd naar een <code>nummer</code> met behulp van <code>Number.From</code>. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1 
De waarde &lt;code&gt;percentage&lt;/code&gt; ophalen uit &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
