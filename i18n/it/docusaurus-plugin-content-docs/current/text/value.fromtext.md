---
title: Value.FromText
---

# Value.FromText


Crea un valore fortemente tipizzato da una rappresentazione testuale.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Decodifica un valore da una rappresentazione testuale e lo interpreta come valore con un tipo appropriato.

-   `text`: il testo da interpretare.
-   `culture`: (facoltativo) Una lingua specifica usata per interpretare il testo (ad esempio, "it-IT").

Questa funzione accetta un valore di testo e restituisce un valore di tipo `numero`, `logico`, `null`, `data/ora`, `durata` o `testo`. Un valore di testo vuoto viene interpretato come valore `null`.


## Examples

### Example #1
Converti il testo che rappresenta un numero nel valore numerico corrispondente.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Converti il testo che rappresenta una percentuale nel valore numerico corrispondente.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Converti il testo che rappresenta un valore in euro in francese nel valore numerico corrispondente.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Converti il testo che rappresenta una data/ora in tedesco nel valore di data/ora corrispondente.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
