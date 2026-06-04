---
title: Character.FromNumber
---

# Character.FromNumber


Pārvērš skaitli par teksta rakstzīmi.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Atgriež skaitlim atbilstošo rakstzīmi.  
  
Norādītajam `number` ir jābūt 21 bita unikoda rakstzīmes kodam.


## Examples

### Example #1
Pārvērst skaitli par tam atbilstošo rakstzīmes vērtību.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2
Pārvērst rakstzīmi par skaitli un atpakaļ.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3
Pārvērst smaidiņa “plati smaidoša seja” heksadecimālo rakstzīmes kodu par atbilstošo UTF-16 surogātpāri.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
