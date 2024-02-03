---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Kubo duomenų importavimas / „DirectQuery“ iš „AtScale“.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Pateikiami kubo duomenys iš „AtScale“ serveryje <code>server</code>. Galima nurodyti pasirinktinį įrašo parametrą <code>options</code> norint valdyti šias parinktis:<ul>        <li><code>TypedMeasureColumns</code>: loginė reikšmė, nurodanti, ar kelių dimensijų arba lentelės tipo modulyje nurodyti tipai bus naudojami įtrauktų matų stulpelių tipams. Kai nustatyta reikšmė „False“, visuose matų stulpeliuose bus naudojamas tipas „Skaičius“. Šios parinkties numatytoji reikšmė yra „False“.</li>        <li><code>CommandTimeout</code>: trukmė (sekundėmis), nustatanti, kiek laiko leidžiama vykdyti užklausą serveryje prieš ją atšaukiant. Numatytoji reikšmė priklauso nuo tvarkyklės. </li>        <li><code>ConnectionTimeout</code>: trukmė, kontroliuojanti, kiek laiko laukti prieš nutraukiant mėginimą užmegzti ryšį su serveriu. Numatytoji reikšmė priklauso nuo tvarkyklės. </li></ul>Įrašo parametras nurodomas kaip [option1 = value1, option2 = value2...].


