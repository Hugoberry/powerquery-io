---
title: Number.FromText
---

# Number.FromText


Cria números com formatos de texto comuns ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Retorna um valor `número` com base no valor de texto especificado, `text`.

-   `text`: a representação textual de um valor numérico. A representação precisa estar em um formato numérico comum, como "15", "3.423,10" ou "5.0E-10".
-   `culture`: uma cultura opcional que controla como `text` é interpretado (por exemplo, "pt-br").


## Examples

### Example #1
Obtenha o valor numérico `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Obtenha o valor numérico `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
