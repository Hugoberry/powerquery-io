---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Visszaad egy meghatározott hosszúságú szöveget a megadott szöveg végének kitöltésével.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Visszaad egy <code>text</code> értéket, amely <code>count</code> hosszúságra van kitöltve úgy, hogy szóközök vannak beszúrva a(z) <code>text</code> szöveges érték végére.    A nem kötelező <code>character</code> karakterrel a kitöltéshez használandó karakter is megadható. Az alapértelmezett kitöltő karakter a szóköz.


## Examples

### Example #1 
Kitölti egy szöveges érték végét úgy, hogy az érték 10 karakter hosszúságú legyen.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
Kitölti egy szöveges érték végét „|” karakterekkel úgy, hogy az érték 10 karakter hosszúságú legyen.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
