---
title: Value.FromText
---

# Value.FromText


Cria um valor fortemente tipado a partir de uma representação textual.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Decodifica um valor a partir de uma representação textual e o interpreta como um valor com o tipo apropriado.

-   `text`: O texto a ser interpretado.
-   `culture`: (Opcional) Uma cultura específica usada para interpretar o texto (por exemplo, "en-US").

Esta função recebe um valor de texto e retorna um valor do tipo `número`, `lógico`, `null`, `data e hora`, `duração` ou `texto`. Um valor de texto vazio é interpretado como um valor `null`.


## Examples

### Example #1
Converte um texto que representa um número para seu valor numérico correspondente.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Converte um texto que representa uma porcentagem para seu valor numérico correspondente.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Converte um texto que representa um valor em euros no formato francês para seu valor numérico correspondente.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Converte um texto que representa uma data e hora no formato alemão para seu valor correspondente de data e hora.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
