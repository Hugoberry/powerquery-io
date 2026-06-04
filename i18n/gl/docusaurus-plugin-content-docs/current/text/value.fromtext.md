---
title: Value.FromText
---

# Value.FromText


Crea un valor fortemente escrito a partir dunha representación textual.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Decodifica un valor dunha representación textual e interprétano como un valor cun tipo apropiado.

-   `text`: O texto a interpretar.
-   `culture`: (Opcional) Unha cultura específica usada para interpretar o texto (por exemplo, "en-US").

Esta función toma un valor de texto e devolve un valor de tipo `número`, `lóxico`, `nulo`, `data e hora`, `duración` ou `texto`. Un valor de texto baleiro interprétase como un valor `nulo`.


## Examples

### Example #1
Converte o texto que representa un número no seu valor numérico correspondente.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Converte o texto que representa unha porcentaxe no seu valor numérico correspondente.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Converte o texto que representa un valor en euros francés no seu valor numérico correspondente.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Converte o texto que representa unha data e hora alemás no seu valor correspondente de data e hora.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
