---
title: Character.ToNumber
---

# Character.ToNumber


Konwertuje znak na jego wartość liczbową.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

Zwraca liczbowy odpowiednik znaku <code>character</code>.<br />    <br />    Wynikiem będzie 21-bitowy punkt kodu Unicode reprezentowany przez podaną parę znaków lub prę dwuskładnikową.  


## Examples

### Example #1 
Konwertuj znak na odpowiadającą mu wartość liczbową.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Konwertuj parę dwuskładnikową UTF-16 dla emotikonu „szeroko uśmiechniętej twarzy” na równoważny punkt kodu szesnastkowego.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
