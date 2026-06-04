---
title: Lines.ToBinary
---

# Lines.ToBinary


Bináris értékké alakít egy szöveges listát a megadott kódolás és lineSeparator használatával. A megadott lineSeparator elválasztó mindegyik sorhoz hozzá lesz fűzve. Ha nincs megadva elválasztó, a program a kocsivissza és sortörés karaktereket használja sorelválasztóként.


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Bináris értékké alakít egy szöveges listát a megadott kódolás és lineSeparator használatával. A megadott lineSeparator elválasztó mindegyik sorhoz hozzá lesz fűzve. Ha nincs megadva elválasztó, a program a kocsivissza és sortörés karaktereket használja sorelválasztóként.



## Category
Lines
