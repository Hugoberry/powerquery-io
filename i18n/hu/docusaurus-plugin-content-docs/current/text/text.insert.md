---
title: Text.Insert
---

# Text.Insert


Szöveges értéket szúr be egy másikba a megadott pozíciónál.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

A(z) `newText` szöveges értéknek a(z) `text` szöveges értékbe a(z) `offset` pozíciónál való beszúrási eredményét adja vissza. A pozíciók számozása 0-nál kezdődik.


## Examples

### Example #1
A „C” karaktert szúrja be a „B” és a „D” közé a „ABD” karakterláncban.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
