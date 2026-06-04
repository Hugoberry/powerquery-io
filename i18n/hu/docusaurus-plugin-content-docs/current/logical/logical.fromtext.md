---
title: Logical.FromText
---

# Logical.FromText


Létrehoz egy logikai értéket a szöveges „true” és „false” értékekből.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Létrehoz egy logikai értéket a szöveges `text` értékből, amely „true” vagy „false” lehet. Ha a(z) `text` ezektől eltérő sztringet tartalmaz, a rendszer hibát jelez. A függvény nem különbözteti meg a kis- és nagybetűket a szöveges `text` értékben.


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
