---
title: Character.ToNumber
---

# Character.ToNumber


Menukarkan aksara kepada nilai nombor.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

Mengembalikan persamaan nombor bagi `character`.  
  
Hasil akan menjadi titik kod Unikod 21 bit yang diwakili oleh aksara yang diberikan atau pasangan pengganti.


## Examples

### Example #1
Tukar aksara kepada nilai nombor setaranya.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2
Tukar pasangan pengganti UTF-16 untuk emotikon "muka tersengih" kepada kod titik perenambelas yang setaranya.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
