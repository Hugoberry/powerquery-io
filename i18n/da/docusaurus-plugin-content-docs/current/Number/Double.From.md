---
title: Double.From
---

# Double.From


## Description

Opretter et dobbeltpræcisions flydende tal ud fra den angivne værdi.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Returnerer en værdi af typen Double <code>number</code> fra den angivne <code>value</code>. Hvis den angivne <code>value</code> er <code>null</code>, returnerer <code>Double.From</code> <code>null</code>.  Hvis den angivne <code>value</code> er <code>number</code> inden for området double, returneres <code>value</code>, ellers returneres der en fejl. Hvis <code>value</code> er af en anden type, konverteres den først til en <code>number</code> ved hjælp af <code>Number.FromText</code>. Der kan også angives en valgfri <code>culture</code> (f.eks. "en-US").


## Examples

### Example #1 
Få dobbeltpræcisions flydende tallet af typen &lt;code&gt;number&lt;/code&gt; for &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
