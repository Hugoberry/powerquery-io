---
title: Duration.ToText
---

# Duration.ToText


Retorna o texto no formato "d.h:m:s".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Retorna uma representação textual no formato "dia.hora:min:s" do valor de duração fornecido, `duration`.

-   `duration`: Um valor de `duration` a partir do qual a representação textual é calculada.
-   `format`: *(Opcional)* Preterido, gerará um erro se não for nulo.


## Examples

### Example #1
Converta `#duration(2, 5, 55, 20)` em um valor de texto.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
