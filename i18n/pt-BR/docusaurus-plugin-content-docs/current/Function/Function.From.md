---
title: Function.From
---

# Function.From


## Description

Cria uma função com uma assinatura de parâmetro específica na parte superior de uma função que leva um único argumento de lista


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Usa uma função unária <code>function</code> e cria uma nova função com o tipo <code>functionType</code>, que cria uma lista dos seus argumentos e a transfere para <code>function</code>.


## Examples

### Example #1 
Converte List.Sum em uma função de dois argumentos que são adicionados de modo conjunto
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Converte uma função que leva uma lista para uma função de dois argumentos
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
