---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Convierte un carácter en un valor numérico.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Devuelve el número equivalente del <code>character</code>.<br />    <br />    El resultado será el punto de código Unicode de 21 bits representado por el carácter o par suplente proporcionado.  


## Examples

### Example #1 
Convierte un carácter en su valor numérico equivalente.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Convierte el par suplente UTF-16 para el emoticono &#34;cara sonriente&#34; en su punto de código hexadecimal equivalente.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
