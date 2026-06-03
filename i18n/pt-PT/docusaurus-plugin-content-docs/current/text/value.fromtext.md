---
title: Value.FromText
---

# Value.FromText


Cria um valor de tipo definido a partir de uma representação textual.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Descodifica um valor de uma representação textual e interpreta-o como um valor com um tipo apropriado.

-   `text`: o texto a interpretar.
-   `culture`: (opcional) uma cultura específica utilizada para interpretar o texto (por exemplo, "en-US").

Esta função assume um valor de texto e devolve um valor do tipo `número`, `lógico`, `nulo`, `data/hora`, `duração` ou `texto`. Um valor de texto vazio é interpretado como um valor `nulo`.


## Examples

### Example #1
Converter texto que representa um número para o respetivo valor numérico.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Converter texto que representa uma percentagem para o respetivo valor numérico.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Converter texto que representa um valor em euros franceses para o respetivo valor numérico.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Converter texto que representa uma data e hora alemãs para o respetivo valor de data e hora.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
