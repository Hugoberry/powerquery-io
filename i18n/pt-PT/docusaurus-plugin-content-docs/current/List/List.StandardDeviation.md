---
title: List.StandardDeviation
---

# List.StandardDeviation


Devolve uma estimativa baseada na amostra do desvio-padrão.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Devolve uma estimativa baseada na amostra do desvio padrão dos valores existentes na lista, <code>numbersList</code>.     Se <code>numbersList</code> for uma lista de números, é devolvido um número.    É emitida uma exceção numa lista vazia que ou uma lista de itens que não seja do tipo <code>number</code>.


## Examples

### Example #1 
Determinar o desvio-padrão dos números 1 a 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
