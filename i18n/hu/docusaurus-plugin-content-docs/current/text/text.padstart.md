---
title: Text.PadStart
---

# Text.PadStart


Visszaad egy meghatározott hosszúságú szöveget a megadott szöveg elejének kitöltésével.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Visszaad egy `text` értéket, amely `count` hosszúságra van kitöltve úgy, hogy szóközök vannak beszúrva a(z) `text` szöveges érték elejére. A nem kötelező `character` karakterrel a kitöltéshez használandó karakter is megadható. Az alapértelmezett kitöltő karakter a szóköz.


## Examples

### Example #1
Kitölti egy szöveges érték elejét úgy, hogy az érték 10 karakter hosszúságú legyen.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2
Kitölti egy szöveges érték elejét „|” karakterekkel úgy, hogy az érték 10 karakter hosszúságú legyen.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
