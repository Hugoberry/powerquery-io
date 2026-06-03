---
title: Comparer.Equals
---

# Comparer.Equals


Retorna um valor lógico baseado na verificação de igualdade sobre os dois valores fornecidos.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Retorna um valor `logical` com base na verificação de igualdade dos dois valores fornecidos, `x` e `y`, usando o `x` fornecido`comparer`.

`comparer` é um `Comparer` que é usado para controlar a comparação. Um comparador é uma função que aceita dois argumentos e retorna -1, 0 ou 1 se o primeiro valor for menor, igual ou maior que o segundo. Os comparadores podem ser usados ​​para fornecer comparações sem diferenciar maiúsculas de minúsculas ou com reconhecimento de cultura e localidade.

Os seguintes comparadores internos estão disponíveis na linguagem da fórmula:

-   `Comparer.Ordinal`: usado para realizar uma comparação ordinal exata
-   `Comparer.OrdinalIgnoreCase`: usado para realizar uma comparação ordinal exata sem diferenciar maiúsculas de minúsculas
-   `Comparer.FromCulture`: usado para realizar uma comparação de reconhecimento de cultura


## Examples

### Example #1
Comparar "1" e "A" usando a localidade "pt-BR" para determinar se os valores são iguais.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
