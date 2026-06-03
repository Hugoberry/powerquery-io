---
title: Text.Insert
---

# Text.Insert


Bir metin değerini verilen konumda başka bir metin değerine ekler.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

`newText` metin değerini `offset` konumunda `text` metin değerine eklemenin sonucunu döndürür. Konumlar 0'dan başlar.


## Examples

### Example #1
"ABD" ifadesinde "B" ile "D" arasına "C" ekler.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
