---
title: Function.From
---

# Function.From


Crie uma função com uma assinatura de parâmetro específica sobre uma função que aceita um único argumento de lista.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Tem uma função unária `function` e cria uma nova função com o tipo de `functionType` que constrói uma lista dos respetivos argumentos e transmite-os para `function`.


## Examples

### Example #1
Converta List.Sum numa função de dois argumentos cujos argumentos são somados.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Converta uma função que aceita uma lista numa função de dois argumentos.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
