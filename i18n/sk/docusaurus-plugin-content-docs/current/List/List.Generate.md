---
title: List.Generate
---

# List.Generate


## Description

Vygeneruje zoznam hodnôt.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Vygeneruje zoznam hodnôt pomocou poskytnutých funkcií. Funkcia <code>initial</code> vygeneruje počiatočnú hodnotu kandidáta, ktorá sa potom testuje na základe <code>condition</code>. Ak je kandidátska hodnota schválená, vráti sa ako súčasť výsledného zoznamu a ďalšia kandidátska hodnota sa vygeneruje odovzdaním novo schválenej hodnoty do <code>next</code>. Keď sa hodnote kandidáta nepodarí zhodovať <code>condition</code>, proces generovania zoznamu sa zastaví. Na transformáciu položiek vo výslednom zozname možno zadať voliteľný parameter <code>selector</code>.


## Examples

### Example #1 
Vytvorte zoznam tak, že začnete od desiatich a opakovane znížte o jednu položku a zabezpečte, aby každá položka bola väčšia ako nula.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Vygenerujte zoznam záznamov obsahujúci hodnoty x a y, kde „x“ predstavuje hodnotu a „y“ zoznam. Hodnota „x“ by nemala byť vyššia ako 10 a mala by vyjadrovať počet položiek v zozname „y“. Po vygenerovaní zoznamu vráťte iba hodnoty „x“.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
