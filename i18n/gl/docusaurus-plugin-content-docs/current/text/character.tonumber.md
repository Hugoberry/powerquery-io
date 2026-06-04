---
title: Character.ToNumber
---

# Character.ToNumber


Converte un carácter nun valor numérico.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

Devolve o número equivalente de `character`.  
  
O resultado será o punto de código Unicode de 21 bits representado polo carácter proporcionado ou parella subrogada.


## Examples

### Example #1
Converte un carácter no seu valor numérico equivalente.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2
Converte o par subrogado UTF-16 para a emoticona de "cara de risa" ao seu código hexadecimal equivalente.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
