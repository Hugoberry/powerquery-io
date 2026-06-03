---
title: Number.FromText
---

# Number.FromText


Cria números a partir de formatos de texto comuns ("15", "3.423,10", "5,0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Devolve um valor de `número` a partir do valor de texto especificado, `text`.

-   `text`: a representação textual de um valor de número. A representação tem de estar num formato de número comum, como por exemplo, "15", "3,423.10", "5.0E-10".
-   `culture`: uma cultura opcional que controla a forma como `text` é interpretado (por exemplo, "en-US").


## Examples

### Example #1
Obter o valor numérico de `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Obter o valor numérico de `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
