---
title: Value.FromText
---

# Value.FromText


Opretter en typesikker værdi ud fra en tekstrepræsentation.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Afkoder en værdi fra en tekstrepræsentation og fortolker den som en værdi med en passende type.

-   `text`: Den tekst, der skal fortolkes.
-   `culture`: (Valgfrit) En bestemt kultur, der bruges til at fortolke teksten (f.eks. "en-US").

Denne funktion tager en tekstværdi og returnerer en værdi af typen `number`, `logical`, `null`, `datetime`, `duration` eller `text`. En tom tekstværdi fortolkes som en `null` værdi.


## Examples

### Example #1
Konvertér tekst, der repræsenterer et tal, til dets tilsvarende talværdi.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Konvertér tekst, der repræsenterer en procentdel, til den tilsvarende talværdi.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Konverter tekst, der repræsenterer en fransk euro-værdi, til den tilsvarende talværdi.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Konvertér tekst, der repræsenterer en tysk dato og et klokkeslæt, til den tilsvarende værdi for dato og klokkeslæt.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
