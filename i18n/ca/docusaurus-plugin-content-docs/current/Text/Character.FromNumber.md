---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Converteix un nombre en un caràcter de text.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Retorna un caràcter equivalent al nombre.<br />    <br />    El valor proporcionat <code>number</code> ha de ser un punt de codi Unicode de 21 bits.


## Examples

### Example #1 
Converteix un nombre en el seu valor de caràcter equivalent.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Converteix un caràcter en un nombre i ho torna a convertir.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Converteix el punt de codi hexadecimal de l&#39;emoticona &#34;cara somrient&#34; al seu parell substitut UTF-16 equivalent.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
