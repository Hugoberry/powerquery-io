---
title: Value.Is
---

# Value.Is


## Description

Nustato, ar reikšmė suderinama su nurodytu tipu.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Nustato, ar reikšmė suderinama su nurodytu tipu. Tai atitinka operatorių „is“ M, išskyrus tai, kad jis gali priimti identifikatoriaus tipo nuorodas, pvz., Number.Type.


## Examples

### Example #1 
Palyginkite du būdus, leidžiančius nustatyti, ar skaičius yra suderinamas su tipo numeriu.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
