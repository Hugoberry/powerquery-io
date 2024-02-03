---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Konvertuoja simbolį į skaičiaus reikšmę.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Pateikiamas <code>character</code> atitinkantis skaičius.<br />    <br />    Gautasis rezultatas bus 21 bito „Unicode“ kodo elementas, kurį nurodo pateiktas simbolis arba pakaitinė pora.  


## Examples

### Example #1 
Konvertuokite simbolį į jį atitinkančią skaičiaus reikšmę.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Konvertuokite šypsniuko „išsišiepęs veidas“ lygiavertę UTF-16 pakaitinių elementų porą į jo šešioliktainį kodo elementą.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
