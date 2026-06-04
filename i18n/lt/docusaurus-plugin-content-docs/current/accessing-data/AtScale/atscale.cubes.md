---
title: AtScale.Cubes
---

# AtScale.Cubes


Kubo duomenų importavimas / „DirectQuery“ iš „AtScale“.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Pateikiami kubo duomenys iš „AtScale“ serveryje `server`. Galima nurodyti pasirinktinį įrašo parametrą `options`-   `TypedMeasureColumns`: loginė reikšmė, nurodanti, ar kelių dimensijų arba lentelės tipo modulyje nurodyti tipai bus naudojami įtrauktų matų stulpelių tipams. Kai nustatyta reikšmė „False“, visuose matų stulpeliuose bus naudojamas tipas Skaičius. Šios parinkties numatytoji reikšmė yra „False“.
-   `CommandTimeout`: trukmė (sekundėmis), nustatanti, kiek laiko leidžiama vykdyti užklausą serveryje prieš ją atšaukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.
-   `ConnectionTimeout`: trukmė, kontroliuojanti, kiek laiko laukti prieš nutraukiant mėginimą užmegzti ryšį su serveriu. Numatytoji reikšmė priklauso nuo tvarkyklės.
Įrašo parametras nurodomas kaip \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Išvardijami kubo duomenys „AtScale“ kube.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



