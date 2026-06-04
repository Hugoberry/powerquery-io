---
title: Character.FromNumber
---

# Character.FromNumber


Menukar nombor kepada aksara teks.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Mengembalikan persamaan aksara bagi nombor.  
  
`number` yang diberikan mestilah titik kod Unikod 21 bit.


## Examples

### Example #1
Tukar nombor kepada nilai aksara setaranya.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2
Tukar aksara kepada nombor dan kembali lagi.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3
Tukar titik kod perenambelas untuk emotikon "muka tersengih" kepada pasangan pengganti UTF-16 yang setaranya.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
