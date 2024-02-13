---
title: Character.ToNumber
---

# Character.ToNumber


Konverterer et tegn til en talværdi.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

Returnerer tilsvarende tal for <code>character</code>.<br />    <br />    Resultatet er det 21-bit Unicode-kodepunkt, der repræsenteres af det angivne tegn eller erstatningspar.  


## Examples

### Example #1 
Konvertér et tegn til den tilsvarende talværdi.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Konvertér surrogatparret UTF-16 for humørikonet &#34;grinende ansigt&#34; til det tilsvarende heksadecimale kodepunkt.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
