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

Devolve um valor `number` a partir do `value` especificado. Pode também ser fornecido um `culture` opcional (por exemplo, "en-US"). Se o `value` especificado for `null`, `Number.From` devolve `null`. Se o `value` especificado for `number`, será devolvido `value`. É possível converter os seguintes tipos de valor num valor `number`:

-   `text`: Um valor `number` da representação textual. Os formatos de texto comuns são processados ("15", "3.423,10", "5,0E-10"). Consulte `Number.FromText` para obter detalhes.
-   `logical`: 1 para `true`, 0 para `false`.
-   `datetime`: Um número de vírgula flutuante de dupla precisão que contém um equivalente de data de Automatização OLE.
-   `datetimezone`: Um número de vírgula flutuante de dupla precisão que contém uma data de Automatização OLE equivalente da data e hora local de `value`.
-   `date`: Um número de vírgula flutuante de dupla precisão que contém um equivalente de data de Automatização OLE.
-   `time`: Expresso em dias fracionais.
-   `duration`: Expresso em dias inteiros e fracionais.

Se `value` for de qualquer outro tipo, será devolvido um erro.


## Examples

### Example #1
Obter o valor `number` de `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obter o valor `number` de `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Obter o `valor` do número de `"12,3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
