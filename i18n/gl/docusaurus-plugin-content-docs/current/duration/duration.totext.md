---
title: Duration.ToText
---

# Duration.ToText


Devolve o texto no formato "d.h:m:s".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Devolve unha representación textual no formato "día.hora:minutos:seg" do valor de duración dado, `duration` .

-   `duration` : Unha `duración` a partir da cal se calcula a representación textual.
-   `format` : *(Opcional)* Obsoleto, xerará un erro se non é nulo.


## Examples

### Example #1
Converter `#duration(2, 5, 55, 20)` nun valor de texto.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
