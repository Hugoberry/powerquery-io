---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Convierte un número en un carácter de texto.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Devuelve el equivalente en caracteres del número.<br />    <br />    El <code>number</code> proporcionado debe ser un punto de código Unicode de 21 bits.


## Examples

### Example #1 
Convierte un número en su valor de carácter equivalente.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Convierte un carácter en un número y vuelve a convertirlo.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Convierte el punto de código hexadecimal del emoticono &#34;cara sonriente&#34; en su par suplente UTF-16 equivalente.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
