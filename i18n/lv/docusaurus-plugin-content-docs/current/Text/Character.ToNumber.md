---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Pārvērš rakstzīmi par skaitlisku vērtību.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Atgriež rakstzīmei <code>character</code> atbilstošo skaitli.<br />    <br />    Rezultāts būs 21 bita unikoda rakstzīmes kods, kam atbilst norādītā rakstzīme vai surogātpāris.  


## Examples

### Example #1 
Pārvērst rakstzīmi par tai atbilstošo skaitļa vērtību.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Pārvērst smaidiņa “plati smaidoša seja” UTF-16 surogātpāri par atbilstošo heksadecimālo rakstzīmes kodu.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
