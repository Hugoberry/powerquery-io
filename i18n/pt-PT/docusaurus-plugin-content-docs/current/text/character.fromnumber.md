---
title: Character.FromNumber
---

# Character.FromNumber


Converte um número num caráter de texto.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Devolve o equivalente em carateres do número.<br />    <br />    O <code>number</code> fornecido deve ser um ponto de código Unicode de 21 bits.


## Examples

### Example #1 
Converter um número para o respetivo valor de caráter equivalente.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Converta um caráter num número e efetue a operação inversa.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Converta o ponto de código hexadecimal do ícone expressivo &#34;face sorridente&#34; no respetivo par de substitutos UTF-16 equivalente.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
