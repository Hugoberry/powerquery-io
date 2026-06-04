---
title: Value.FromText
---

# Value.FromText


Crea un valor de tipatge fort a partir d'una representació textual.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Descodifica un valor d'una representació textual i l'interpreta com a un valor amb un tipus adequat.

-   `text`: text que s'interpretarà.
-   `culture`: (Opcional) Una cultura específica que s'utilitza per interpretar el text (per exemple, "en-US").

Aquesta funció pren un valor de text i retorna un valor de tipus `number`, `logical`, `null`, `datetime`, `duration` o `text`. Un valor de text buit s'interpreta com a valor `nul`.


## Examples

### Example #1
Converteix el text que representa un nombre al seu valor numèric corresponent.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Converteix el text que representa un percentatge al seu valor numèric corresponent.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Converteix el text que representa un valor en euros francesos al seu valor numèric corresponent.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Converteix el text que representa una data i una hora alemanyes al seu valor de data i hora corresponent.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
