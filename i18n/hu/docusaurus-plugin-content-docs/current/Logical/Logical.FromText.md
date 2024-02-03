---
title: Logical.FromText
---

# Logical.FromText


## Description

Létrehoz egy logikai értéket a szöveges „true” és „false” értékekből.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Létrehoz egy logikai értéket a szöveges <code>text</code> értékből, amely „true” vagy „false” lehet. Ha a(z) <code>text</code> ezektől eltérő sztringet tartalmaz, a függvény kivételt vált ki. A függvény nem különbözteti meg a kis- és nagybetűket a szöveges <code>text</code> értékben.


## Examples

### Example #1 
Logikai érték létrehozása a „true” szöveges sztringből
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Logikai érték létrehozása az „a” szöveges sztringből
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
