---
title: Value.FromText
---

# Value.FromText


Creează o valoare cu tip definit explicit dintr-o reprezentare textuală.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Decodifică o valoare dintr-o reprezentare textuală și o interpretează ca o valoare cu un tip adecvat.

-   `text`: Textul de interpretat.
-   `culture`: (Opțional) O anumită cultură utilizată pentru a interpreta textul (de exemplu, „ro-RO”).

Această funcție preia o valoare text și returnează o valoare de tip `număr`, `logic`, `nul`, `datăoră`, `durată` sau `text`. O valoare text goală este interpretată ca o valoare `nul`.


## Examples

### Example #1
Convertiți textul care reprezintă un număr în valoarea în valoarea sa numerică corespunzătoare.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Convertiți textul care reprezintă un procent în valoarea în valoarea sa numerică corespunzătoare.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Convertiți textul care reprezintă o valoare în euro francez în valoarea sa numerică corespunzătoare.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Convertiți textul care reprezintă o dată și o oră din Germania în valoarea corespunzătoare de dată și oră.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
