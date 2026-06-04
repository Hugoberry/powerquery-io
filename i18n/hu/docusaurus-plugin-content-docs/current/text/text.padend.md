---
title: Text.PadEnd
---

# Text.PadEnd


Visszaad egy meghatározott hosszúságú szöveget a megadott szöveg végének kitöltésével.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Visszaad egy `text` értéket, amely `count` hosszúságra van kitöltve úgy, hogy szóközök vannak beszúrva a(z) `text` szöveges érték végére. A nem kötelező `character` karakterrel a kitöltéshez használandó karakter is megadható. Az alapértelmezett kitöltő karakter a szóköz.


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
