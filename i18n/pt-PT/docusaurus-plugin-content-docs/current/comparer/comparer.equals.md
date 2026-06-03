---
title: Comparer.Equals
---

# Comparer.Equals


Devolve um valor lógico baseado na verificação de igualdade dos dois valores apresentados.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Devolve um valor `lógico` baseado na verificação de igualdade dos dois valores apresentados, `x` e `y`, utilizando o `comparer` fornecido.

`comparer` é um `Comparador` utilizado no controlo da comparação. Um comparador é uma função que aceita dois argumentos e devolve -1, 0 ou 1, com base no facto de o primeiro valor ser menor, igual ou superior ao segundo. Os comparadores podem ser utilizados para fornecer comparações não sensíveis a maiúsculas e minúsculas ou baseadas na cultura ou na região.

Os comparadores incorporados seguintes estão disponíveis na linguagem da fórmula:

-   `Comparador.Ordinal`: utilizado para executar uma comparação ordinal exata
-   `Comparador.OrdinalIgnoreCase`: utilizado para executar uma comparação ordinal exata não sensível a maiúsculas/minúsculas
-   `Comparer.FromCulture`: utilizado para executar uma comparação baseada na cultura


## Examples

### Example #1
Comparar "1" e "A" com a região "pt-PT" para determinar se os valores são iguais.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
