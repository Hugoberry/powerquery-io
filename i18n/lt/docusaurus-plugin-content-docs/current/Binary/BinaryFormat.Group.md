---
title: BinaryFormat.Group
---

# BinaryFormat.Group


## Description

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


## Details

Parametrai:<ul><li><code>binaryFormat</code> parametras nurodo rakto reikšmės dvejetainį formatą.</li><li><code>group</code> parametras pateikia informaciją apie žinomų elementų grupę.</li><li>Pasirinktinį <code>extra</code> parametrą galima naudoti norint nustatyti funkciją, kuri pateiks reikšmės, esančios po kiekvieno netikėto rakto, dvejetainio formato reikšmę. Jei <code>extra</code> parametras nenurodytas, tada bus pateikta klaida, jei yra nenumatytų rakto reikšmių.</li></ul><code>group</code> parametras nurodo elementų aprašų sąrašą. Kiekvieno elemento aprašas yra sąrašas su 3–5 reikšmėmis:<ul><li>Rakto reikšmė. Rakto reikšmė, atitinkanti elementą. Elementų rinkinyje ji turi būti unikali.</li><li>Elemento formatas. Dvejetainis formatas, atitinkantis elemento reikšmę. Tai leidžia kiekvienam elementui turėti skirtingą formatą. </li><li>Elemento pasikartojimas. <code>BinaryOccurrence.Type</code> reikšmė, nurodanti, kiek kartų elementas turėtų pasikartoti grupėje. Jei nėra reikiamų elementų, bus pateikta klaida. Reikiami arba pasirinktiniai pasikartojantys elementai tvarkomi kaip netikėtos rakto reikšmės.</li><li>Numatytoji elemento reikšmė (pasirinktinai). Jei numatytoji elemento reikšmė pateikiama elemento aprašo sąraše ir jos reikšmė nėra null, tada ji bus naudojama vietoj numatytosios. Pasikartojančių arba pasirinktinių elementų numatytoji reikšmė yra null, o pasikartojančių reikšmių numatytoji reikšmė yra tuščias sąrašas \{ }.</li><li>Elemento reikšmės transformavimas (pasirinktinai). Jei elemento aprašo sąraše yra elemento reikšmės transformavimo funkcija ir jos reikšmė nėra null, tada ji bus iškviesta, kad transformuotų elemento reikšmę prieš ją pateikiant. Transformavimo funkcija iškviečiama tik tada, jei elementas pasirodo įvestyje (ji niekada nebus iškviesta esant numatytajai reikšmei). </li></ul>


## Examples

### Example #1 
Toliau laikoma, kad rakto reikšmė yra vieno baito, grupėje tikimasi 4 elementų, iš kurių visuose po rakto yra duomenų baitas.  Elementai įvestyje rodomi taip:&lt;ul&gt;&lt;li&gt;1 raktas būtinas, jis rodomas su reikšme 11.&lt;/li&gt;&lt;li&gt;2 raktas pasikartoja, pasirodo du kartus su reikšme 22 ir pateikiama reikšmė \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;3 raktas pasirinktinis, jis nepasirodo, pateikiama neapibrėžta reikšmė.&lt;/li&gt;&lt;li&gt;4 raktas pasikartoja, bet nepasirodo, pateikiama reikšmė \{ }.&lt;/li&gt;&lt;li&gt;5 raktas nėra grupės dalis, bet pasirodo vieną kartą su reikšme 55.  Papildoma funkcija iškviečiama su rakto reikšme 5 ir pateikia formatą, atitinkantį tą reikšmę (BinaryFormat.Byte).  Reikšmė 55 perskaitoma ir atmetama.&lt;/li&gt;&lt;/ul&gt;
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
Pateiktame pavyzdyje parodoma elemento reikšmės transformacija ir numatytoji elemento reikšmė.   Pasikartojantis elementas su 1 raktu susumuoja perskaitytų reikšmių sąrašą naudodamas List.Sum.  Pasirinktinis elementas su 2 raktu turi numatytąją reikšmę 123, o ne neapibrėžtą.
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
