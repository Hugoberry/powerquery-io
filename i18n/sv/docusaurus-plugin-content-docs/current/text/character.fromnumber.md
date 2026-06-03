---
title: Character.FromNumber
---

# Character.FromNumber


Konverterar ett tal till ett texttecken.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Returnerar teckenmotsvarigheten för tal.  
  
Den angivna `number` ska vara en 21-bitars Unicode-kodpunkt.


## Examples

### Example #1
Konvertera ett tal till motsvarande teckenvärde.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2
Konvertera ett tecken till ett tal och tillbaka igen.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3
Konvertera den hexadecimala kodpunkten för uttryckssymbolen "leende ansikte" till motsvarande UTF-16-surrogatpar.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
