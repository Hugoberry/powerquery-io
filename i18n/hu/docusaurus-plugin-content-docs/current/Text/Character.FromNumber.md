---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Szöveges karakterré alakít egy számot.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Visszaadja a szám megfelelőjét karakterben.<br />    <br />    A megadott <code>number</code> karakternek 21 bites Unicode-kódpontnak kell lennie.


## Examples

### Example #1 
Számot alakít át a számnak megfelelő karakterértékre.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Karaktert alakít át számmá, majd vissza karakterré.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
A „vigyorgó arc” hangulatjel hexadecimális kódpontját alakítja át a megfelelő UTF-16 helyettesítő párrá.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
