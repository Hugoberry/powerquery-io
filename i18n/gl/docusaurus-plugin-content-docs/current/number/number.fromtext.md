---
title: Number.FromText
---

# Number.FromText


Crea números a partir de formatos de texto comúns ("15", "3.423,10", "5,0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Devolve un valor `number` a partir do valor de texto indicado, `text`.

-   `text`: representación textual dun valor numérico. A representación debe estar nun formato de número común: "15", "3423,10", "5,0E-10".
-   `culture`: cultura opcional que controla como se interpreta `text` (por exemplo, "gl-ES").


## Examples

### Example #1
Obter o valor de número de `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Obter o valor de número de `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
