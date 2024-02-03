---
title: BinaryFormat.Group
---

# BinaryFormat.Group


## Description

Vraća binarni format koji čita grupu stavki.


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

Parametri su sledeći:<ul><li>Parametar <code>binaryFormat</code> navodi binarni format vrednosti ključa.</li><li>Parametar <code>group</code> navodi informacije o grupi poznatih stavki.</li><li>Opcionalni parametar <code>extra</code> se može koristiti za navođenje funkcije koja će vratiti vrednost binarnog formata za vrednost koja sledi bilo koji neočekivani ključ. Ako se parametar <code>extra</code> ne navede, biće prijavljena greška ako se pojave neočekivane vrednosti ključa.</li></ul>Parametar <code>group</code> navodi listu definicija stavki. Svaka definicija stavke je lista koja sadrži 3–5 sledećih vrednosti:<ul><li>Vrednost ključa. Vrednost ključa koja odgovara stavci. Mora da bude jedinstvena u skupu stavki.</li><li>Format stavke. Binarni format koji odgovara vrednosti stavke. Omogućava da svaka stavka ima različiti format. </li><li>Pojavljivanje stavke. Vrednost <code>BinaryOccurrence.Type</code> koja označava očekivani broj pojavljivanja stavke u grupi. Obavezne stavke koje nisu prisutne izazivaju grešku. Obavezne ili opcionalne duplirane stavke se smatraju neočekivanim vrednostima ključa.</li><li>Podrazumevana vrednost stavke (opcionalno). Ako se podrazumevana vrednost stavke pojavljuje na listi definicija stavki i nije bez vrednosti, biće korišćena umesto podrazumevane opcije. Podrazumevana opcija za stavke koje se ponavljaju ili stavke koje su opcionalne jeste „bez vrednosti“, dok je podrazumevana opcija za vrednosti koje se ponavljaju prazna lista \{ }.</li><li>Transformacija vrednosti stavke (opcionalno). Ako je funkcija transformacije vrednosti stavke prisutna na listi definicija stavki i nije bez vrednosti, biće pozvana da transformiše vrednost stavke pre nego što bude vraćena. Funkcija transformacije se poziva samo ako se stavka pojavljuje u unosu (nikada neće biti pozvana uz podrazumevanu vrednost). </li></ul>


## Examples

### Example #1 
U nastavku se podrazumeva vrednost ključa koja je jednobajtna, sa 4 očekivane stavke u grupi, od kojih sve imaju bajt podataka nakon ključa.  Stavke se pojavljuju u ulazu na sledeći način:&lt;ul&gt;&lt;li&gt;Ključ 1 je obavezan i pojavljuje se sa vrednošću 11.&lt;/li&gt;&lt;li&gt;Ključ 2 se ponavlja i pojavljuje se dva puta sa vrednošću 22, a kao rezultat daje vrednost \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;Ključ 3 je opcionalan i ne pojavljuje se, a kao rezultat daje vrednost „bez vrednosti“.&lt;/li&gt;&lt;li&gt;Ključ 4 se ponavlja, ali se ne pojavljuje, a kao rezultat daje vrednost \{ }.&lt;/li&gt;&lt;li&gt;Ključ 5 nije deo grupe, ali se pojavljuje jednom sa vrednošću 55.  Dodatna funkcija se poziva pomoću vrednosti ključa 5, a vraća format koji odgovara toj vrednosti (BinaryFormat.Byte).  Vrednost 55 se čita i odbacuje.&lt;/li&gt;&lt;/ul&gt;
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
Sledeći primer ilustruje transformaciju vrednosti stavke i podrazumevanu vrednost stavke.   Stavka koja se ponavlja sa ključem 1 sumira listu pročitanih vrednosti pomoću List.Sum.  Opcionalna stavka sa ključem 2 ima podrazumevanu vrednost 123 umesto „bez vrednosti“.
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
