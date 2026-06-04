---
title: Number.FromText
---

# Number.FromText


Ustvari števila iz običajnih oblik besedila ("15","3,423.10","5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Vrne vrednost `number` iz navedene besedilne vrednosti `text`.

-   `text`: predstavitev številske vrednosti v obliki besedila. Predstavitev mora biti v običajni obliki števila –"15","3,423.10","5.0E-10".
-   `culture`: izbirna kultura, ki nadzira način obravnave parametra `text` (na primer"sl-SI").


## Examples

### Example #1
Poiščite številsko vrednost za `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Poiščite številsko vrednost za `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
