---
title: Duration.ToText
---

# Duration.ToText


Devolve o texto com o formato "d.h:m:s".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Devolve uma representação textual no formato "dia.hora:mins:seg" do valor de duração indicado, `duration`.

-   `duration`: um `duration` a partir do qual é calculada a representação textual.
-   `format`: *(opcional)* preterido; irá gerar um erro se não for null.


## Examples

### Example #1
Converter `#duration(2, 5, 55, 20)` num valor de texto.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
