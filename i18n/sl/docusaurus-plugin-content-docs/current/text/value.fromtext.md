---
title: Value.FromText
---

# Value.FromText


Ustvari močno tipizirano vrednost iz predstavitve v obliki besedila.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Dekodira vrednost iz predstavitve v obliki besedila in jo tolmači kot vrednost z ustrezno vrsto.

-   `text`: Besedilo za interpretacijo.
-   `culture`: (Opcijsko) Posebna kultura, ki se uporablja za razlago besedila (na primer"en-US").

Ta funkcija vzame besedilno vrednost in vrne vrednost vrste `number`, `logical`, `null`, `datetime`, `duration` ali `text`. Prazna besedilna vrednost se tolmači kot vrednost `null`.


## Examples

### Example #1
Pretvori besedilo, ki predstavlja število, v ustrezno številčno vrednost.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Pretvori besedilo, ki predstavlja odstotek, v ustrezno številčno vrednost.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Pretvori besedilo, ki predstavlja vrednost francoskega evra, v ustrezno številčno vrednost.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Pretvori besedilo, ki predstavlja nemški datum in čas, v ustrezno vrednost datuma in časa.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
