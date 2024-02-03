---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Converte um caractere em um valor numérico.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Retorna o equivalente numérico de <code>character</code>.<br />.
    <br />    O resultado será o ponto de código Unicode de 21 bits representado pelo caractere fornecido ou pelo par alternativo.  


## Examples

### Example #1 
Converte um caractere em seu valor de número equivalente.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Converte o par alternativo UTF-16 para smiley &#34;rosto sorridente&#34; em seu ponto de código hexadecimal equivalente.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
