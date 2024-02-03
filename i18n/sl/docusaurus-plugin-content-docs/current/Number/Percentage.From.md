---
title: Percentage.From
---

# Percentage.From


## Description

Vrne odstotkovno vrednost navedene vrednosti.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Iz navedene vrednosti <code>value</code> vrne vrednost <code>percentage</code>. Če je navedena vrednost <code>value</code> <code>null</code>, <code>Percentage.From</code> vrne <code>null</code>. Če je navedena vrednost <code>value</code> <code>text</code> z znakom za simbol na koncu, bo vrnjeno pretvorjeno decimalno število. V nasprotnem primeru si oglejte <code>Number.From</code> za pretvorbo vrednosti v število <code>number</code>. Navedete lahko tudi izbirni parameter <code>culture</code> (na primer "sl-SI").


## Examples

### Example #1 
Pridobite vrednost &lt;code&gt;percentage&lt;/code&gt; za &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
