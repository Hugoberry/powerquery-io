---
title: Decimal.From
---

# Decimal.From


## Description

Opretter en decimal ud fra den angivne værdi.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Returnerer en decimalværdi <code>nummer</code> fra den angivne <code>value</code>. Hvis den angivne <code>value</code> er <code>null</code>, returnerer <code>Decimal.From</code> <code>null</code>.  Hvis den angivne <code>value</code> er <code>number</code> inden for decimalintervallet, returneres <code>value</code>, ellers returneres der en fejl. Hvis <code>value</code> er af en anden type, konverteres den først til en <code>number</code> ved hjælp af <code>Number.FromText</code>. Der kan også angives en valgfri <code>culture</code> (f.eks. "en-US").


## Examples

### Example #1 
Få decimalværdien af typen &lt;code&gt;number&lt;/code&gt; for &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
