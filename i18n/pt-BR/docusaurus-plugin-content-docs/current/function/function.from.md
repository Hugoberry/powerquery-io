---
title: Function.From
---

# Function.From


Cria uma função com uma assinatura de parâmetro específica sobre uma função que usa um único argumento de lista.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Usa uma função unária `function` e cria uma nova função com o tipo `functionType`, que cria uma lista dos seus argumentos e a transfere para `function`.


## Examples

### Example #1
Converte List.Sum em uma função de dois argumentos cujos argumentos são adicionados juntos.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Converte uma função que coloca uma lista em uma função de dois argumentos.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
