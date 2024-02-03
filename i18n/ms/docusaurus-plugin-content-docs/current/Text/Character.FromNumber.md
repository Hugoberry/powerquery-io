---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Menukar nombor kepada aksara teks.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Mengembalikan persamaan aksara bagi nombor.<br />    <br />    <code>number</code> yang diberikan mestilah titik kod Unikod 21 bit.


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
Tukar titik kod perenambelas untuk emotikon &#34;muka tersengih&#34; kepada pasangan pengganti UTF-16 yang setaranya.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
