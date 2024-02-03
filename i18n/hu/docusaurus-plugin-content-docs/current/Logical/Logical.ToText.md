---
title: Logical.ToText
---

# Logical.ToText


## Description

A „true” vagy a „false” szöveget adja vissza a megadott logikai értéktől függően.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Létrehoz egy szöveges értéket a logikai <code>logicalValue</code> értékből, amely <code>true</code> vagy <code>false</code> lehet. Ha a(z) <code>logicalValue</code> nem logikai érték, a függvény kivételt vált ki.


## Examples

### Example #1 
Szöveges érték létrehozása a logikai &lt;code&gt;true&lt;/code&gt; értékből
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
