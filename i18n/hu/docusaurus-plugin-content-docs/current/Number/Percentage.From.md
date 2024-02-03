---
title: Percentage.From
---

# Percentage.From


## Description

Százalékos értéket ad vissza az adott elemből.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Egy <code>percentage</code> értéket ad vissza a megadott <code>value</code> értékből. Ha a megadott <code>value</code> <code>null</code>, a <code>Percentage.From</code> függvény <code>null</code> értéket ad vissza. Ha a megadott <code>value</code> <code>text</code> értékű egy záró százalék szimbólummal, akkor a konvertált tizedes tört számot adja vissza. Máskülönben a <code>Number.From</code> függvény használatával <code>number</code> értékre konvertálja. Egy nem kötelező <code>culture</code> is megadható (például, „en-US”).


## Examples

### Example #1 
Kérje le a &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; &lt;code&gt;percentage&lt;/code&gt; értékét.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
