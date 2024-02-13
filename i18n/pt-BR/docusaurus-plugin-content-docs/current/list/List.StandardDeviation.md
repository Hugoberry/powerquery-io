---
title: List.StandardDeviation
---

# List.StandardDeviation


Retorna uma amostra com base na estimativa do desvio padrão.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Retorna uma estimativa com base em amostra do desvio padrão dos valores na lista, <code>numbersList</code>.    Se <code>numbersList</code> for uma lista de números, um número será retornado.    Uma exceção será lançada em uma lista vazia ou em uma lista de itens que não seja do tipo <code>number</code>.


## Examples

### Example #1 
Localize o desvio padrão dos números de 1 a 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
