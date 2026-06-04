---
title: BinaryFormat.Group
---

# BinaryFormat.Group


Pateikiamas dvejetainis formatas, kuris perskaito elementų grupę.


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Remarks

Parametrai:

-   `binaryFormat` parametras nurodo rakto reikšmės dvejetainį formatą.
-   `group` parametras pateikia informaciją apie žinomų elementų grupę.
-   Pasirinktinį `extra` parametrą galima naudoti norint nustatyti funkciją, kuri pateiks reikšmės, esančios po kiekvieno netikėto rakto, dvejetainio formato reikšmę. Jei `extra` parametras nenurodytas, tada bus pateikta klaida, jei yra nenumatytų rakto reikšmių.

`group` parametras nurodo elementų aprašų sąrašą. Kiekvieno elemento aprašas yra sąrašas su 3–5 reikšmėmis:

-   Rakto reikšmė. Rakto reikšmė, atitinkanti elementą. Elementų rinkinyje ji turi būti unikali.
-   Elemento formatas. Dvejetainis formatas, atitinkantis elemento reikšmę. Tai leidžia kiekvienam elementui turėti skirtingą formatą.
-   Elemento pasikartojimas. `BinaryOccurrence.Type` reikšmė, nurodanti, kiek kartų elementas turėtų pasikartoti grupėje. Jei nėra reikiamų elementų, bus pateikta klaida. Reikiami arba pasirinktiniai pasikartojantys elementai tvarkomi kaip netikėtos rakto reikšmės.
-   Numatytoji elemento reikšmė (pasirinktinai). Jei numatytoji elemento reikšmė pateikiama elemento aprašo sąraše ir jos reikšmė nėra null, tada ji bus naudojama vietoj numatytosios. Pasikartojančių arba pasirinktinių elementų numatytoji reikšmė yra null, o pasikartojančių reikšmių numatytoji reikšmė yra tuščias sąrašas \{ \}.
-   Elemento reikšmės transformavimas (pasirinktinai). Jei elemento aprašo sąraše yra elemento reikšmės transformavimo funkcija ir jos reikšmė nėra null, tada ji bus iškviesta, kad transformuotų elemento reikšmę prieš ją pateikiant. Transformavimo funkcija iškviečiama tik tada, jei elementas pasirodo įvestyje (ji niekada nebus iškviesta esant numatytajai reikšmei).


## Examples

### Example #1
Toliau laikoma, kad rakto reikšmė yra vieno baito, grupėje tikimasi 4 elementų, iš kurių visuose po rakto yra duomenų baitas. Elementai įvestyje rodomi taip:

-   1 raktas būtinas, jis rodomas su reikšme 11.
-   2 raktas pasikartoja, pasirodo du kartus su reikšme 22 ir pateikiama reikšmė \{ 22, 22 \}.
-   3 raktas pasirinktinis, jis nepasirodo, pateikiama neapibrėžta reikšmė.
-   4 raktas pasikartoja, bet nepasirodo, pateikiama reikšmė \{ \}.
-   5 raktas nėra grupės dalis, bet pasirodo vieną kartą su reikšme 55. Papildoma funkcija iškviečiama su rakto reikšme 5 ir pateikia formatą, atitinkantį tą reikšmę (BinaryFormat.Byte). Reikšmė 55 perskaitoma ir atmetama.
```powerquery
let
    b = #binary({
        1, 11,
        2, 22,
        2, 22,
        5, 55,
        1, 11
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Required},
            {2, BinaryFormat.Byte, BinaryOccurrence.Repeating},
            {3, BinaryFormat.Byte, BinaryOccurrence.Optional},
            {4, BinaryFormat.Byte, BinaryOccurrence.Repeating}
        },
        (extra) => BinaryFormat.Byte
    )
in
    f(b)
```

Result: 
```powerquery
{11, {22, 22}, null, {}}
```


### Example #2
Pateiktame pavyzdyje parodoma elemento reikšmės transformacija ir numatytoji elemento reikšmė. Pasikartojantis elementas su 1 raktu susumuoja perskaitytų reikšmių sąrašą naudodamas List.Sum. Pasirinktinis elementas su 2 raktu turi numatytąją reikšmę 123, o ne neapibrėžtą.
```powerquery
let
    b = #binary({
        1, 101,
        1, 102
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Repeating,
              0, (list) => List.Sum(list)},
            {2, BinaryFormat.Byte, BinaryOccurrence.Optional, 123}
        }
    )
in
    f(b)
```

Result: 
```powerquery
{203, 123}
```




## Category
Binary Formats.Reading a group of items
