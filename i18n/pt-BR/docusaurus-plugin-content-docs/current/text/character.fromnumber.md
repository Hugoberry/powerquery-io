---
title: Character.FromNumber
---

# Character.FromNumber


Converte um número em um caractere de texto.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Retorna o equivalente de caracteres do número.<br />    <br />    O <code>number</code> fornecido deve ser um ponto de código Unicode de 21 bits.


## Examples

### Example #1 
Converte um número em seu valor de caractere equivalente.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Converte um caractere em um número e retorna a ser caractere.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Converte o ponto de código hexadecimal para smiley &#34;rosto sorridente&#34; em seu par alternativo UTF-16 equivalente.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
