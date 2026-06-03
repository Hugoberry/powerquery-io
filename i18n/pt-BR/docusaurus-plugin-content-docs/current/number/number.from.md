---
title: Number.From
---

# Number.From


Cria um número a partir do valor especificado.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retorna um valor `number` com base no `value` especificado. Um `culture` opcional também pode ser fornecido (por exemplo, "en-US"). Se o `value` especificado for `null`, `Number.From` retornará `null`. Se o `value` especificado for `number`, `value` será retornado. Os valores dos seguintes tipos podem ser convertidos em um valor `number`:

-   `text`: um valor `number` da representação textual. Os formatos de texto comuns são tratados ("15", "3,423.10", "5.0E-10"). Confira `Number.FromText` para obter informações detalhadas.
-   `logical`: 1 para `true`, 0 para `false`.
-   `datetime`: um número de ponto flutuante de precisão dupla que contém um equivalente de data de Automação OLE.
-   `datetimezone`: um número de ponto flutuante de precisão dupla que contém um equivalente de data de Automação OLE da data e hora locais `value`.
-   `date`: um número de ponto flutuante de precisão dupla que contém um equivalente de data de Automação OLE.
-   `date`: expresso em dias fracionários.
-   `duration`: expresso em dias inteiros e fracionários.

Se `value` for de qualquer outro tipo, um erro será retornado.


## Examples

### Example #1
Obtenha o valor `number` de `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obtenha o valor `number` de `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Obtém o valor `number` de `"12.3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
