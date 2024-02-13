---
title: Function.From
---

# Function.From


Cria uma função com uma assinatura de parâmetro específico na parte superior de uma função que tem um argumento de lista único


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Tem uma função unária <code>function</code> e cria uma nova função com o tipo de <code>functionType</code> que constrói uma lista dos respetivos argumentos e transmite-os para <code>function</code>.


## Examples

### Example #1 
Converte List.Sum numa função de dois argumentos cujos argumentos são adicionados em conjunto
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Converte uma função que tem uma lista numa função de dois argumentos
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
