---
title: Character.ToNumber
---

# Character.ToNumber


Számértékére alakít át egy karaktert.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

Visszaadja a(z) `character` megfelelőjét számban.  
  
Az eredmény a megadott karakter vagy helyettesítő pár által jelölt 21 bites Unicode-kódpont.


## Examples

### Example #1
Karaktert alakít át a karakternek megfelelő számértékre.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2
A „vigyorgó arc” hangulatjel UTF-16 helyettesítő párját alakítja át a megfelelő hexadecimális kódponttá.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
