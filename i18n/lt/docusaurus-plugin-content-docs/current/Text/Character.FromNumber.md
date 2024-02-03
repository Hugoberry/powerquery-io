---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Konvertuoja skaičių į teksto simbolį.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Pateikiamas skaičių atitinkantis simbolis.<br />    <br />    Pateiktas <code>number</code> turi būti 21 bito „Unicode“ kodo elementas.


## Examples

### Example #1 
Konvertuokite skaičių į jį atitinkančią simbolio reikšmę.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Konvertuokite simbolį į skaičių ir atgal.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Konvertuokite šešioliktainį šypsniuko „išsišiepęs veidas“ kodo elementą į jo lygiavertę UTF-16 pakaitinių elementų porą.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
