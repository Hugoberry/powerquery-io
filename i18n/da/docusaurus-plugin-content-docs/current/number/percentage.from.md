---
title: Percentage.From
---

# Percentage.From


Returnerer en procentværdi af den givne værdi.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerer en værdi af typen <code>procent</code> fra den angivne <code>value</code>. Hvis den angivne <code>value</code> er <code>null</code>, returnerer <code>Percentage.From</code> <code>null</code>.  Hvis den angivne <code>value</code> er <code>text</code> med et efterstillet procentsymbol, returneres det konverterede decimaltal. Ellers konverteres værdien til en <code>number</code> ved hjælp af <code>Number.From</code>. Der kan også angives en valgfri <code>culture</code> (f.eks. "en-US").


## Examples

### Example #1 
Få &lt;code&gt;percentage&lt;/code&gt;-værdien af &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
