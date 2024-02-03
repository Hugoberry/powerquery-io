---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Converte un número nun carácter de texto.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Devolve o carácter equivalente do número.<br />    <br />    O <code>number</code> fornecido debe ser un punto de código Unicode de 21 bits.


## Examples

### Example #1 
Converte un número no seu valor de carácter equivalente.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Converte un carácter nun número e viceversa.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Converte o punto de código hexadecimal para a emoticona de &#34;cara de risa&#34; ao seu par equivalente UTF-16.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
