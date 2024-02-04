---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Converte um caráter num valor numérico.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Devolve o número equivalente ao <code>character</code>.<br />    <br />    O resultado será o ponto de código Unicode de 21 bits representado pelo caráter fornecido ou pelo par substituto.  


## Examples

### Example #1 
Converte um carater no respetivo valor numérico equivalente.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Converta o par substituto UTF-16 do ícone expressivo &#34;face sorridente&#34; no seu ponto de código hexadecimal equivalente.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
