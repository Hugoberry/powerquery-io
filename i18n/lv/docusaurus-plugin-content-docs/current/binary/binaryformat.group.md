---
title: BinaryFormat.Group
---

# BinaryFormat.Group


Atgriež bināru formātu, kas satur vienumu grupu.


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

Parametri ir norādīti tālāk.

-   Parametrs `binaryFormat` norāda atslēgas vērtības bināro formātu.
-   Parametrs `group` sniedz informāciju par zināmo vienumu grupu.
-   Neobligāto parametru `extra` var izmantot, lai norādītu funkciju, kura atgriezīs bināra formāta vērtību tādai vērtībai, kura atrodas aiz jebkuras neparedzētas atslēgas. Ja parametrs `extra` nav norādīts, tad gadījumos, ja tiek izmantotas neparedzētas atslēgas vērtības, tiek aktivizēta kļūda.

Parametrs `group` norāda vienumu definīciju sarakstu. Katra vienuma definīcija ir saraksts ar 3–5 vērtībām, kā parādīts tālāk.

-   Atslēgas vērtība. Vienumam atbilstošā atslēgas vērtība. Vienumu kopā šai vērtībai ir jābūt unikālai.
-   Vienuma formāts. Vienuma vērtībai atbilstošais binārais formāts. Izmantojot šo vērtību, katram vienumam var būt citāds formāts.
-   Vienuma gadījumi. Vērtība `BinaryOccurrence.Type` (Bināro gadījumu veids), kura norāda, cik šī vienuma gadījumu ir paredzēts attiecīgajā grupā. Ja trūkst obligāto vienumu, tad rodas kļūda. Obligāti un neobligāti vienumu dublikāti tiek apstrādāti kā neparedzētas atslēgas vērtības.
-   Noklusējuma vienuma vērtība (neobligāta). Ja noklusējuma vienuma vērtība ir norādīta vienuma definīciju sarakstā un tā nav Null, tad šī vērtība tiek izmantota noklusējuma vietā. Atkārtoto un neobligāto vienumu noklusējums ir Null, un atkārtoto vērtību noklusējums ir tukšs saraksts \{ \}.
-   Vienuma vērtības transformēšana (neobligāta). Ja vienuma vērtības transformēšanas funkcija ir norādīta vienuma definīciju sarakstā un tā nav Null, tad pirms vienuma atgriešanas tā tiek izsaukta, lai pārveidotu vienuma vērtību. Transformēšanas funkcija tiek izsaukta tikai tad, ja vienums atrodas ievadē (tā nekad netiek izsaukta ar noklusējuma vērtību).


## Examples

### Example #1
Nākamajā procedūrā tiek pieņemts, ka atslēgas vērtība ir viens baits, grupā ir paredzēti 4 vienumi, un tiem visiem aiz atslēgas ir datu baits. Vienumi ievadē tiek parādīti tālāk aprakstītajā veidā.

-   Atslēga 1 ir obligāta, un tā tiek parādīta ar vērtību 11.
-   Atslēga 2 atkārtojas, tā divreiz ir norādīta ar vērtību 22, un rezultāta vērtība ir \{ 22, 22 \}.
-   Atslēga 3 ir neobligāta, tā netiek parādīta, un rezultāta vērtība ir Null.
-   Atslēga 4 atkārtojas, bet netiek parādīta, un rezultāta vērtība ir \{ \}.
-   Atslēga 5 nav daļa no grupas, bet tiek vienreiz parādīta ar vērtību 55. Papildu funkcija tiek izsaukta ar atslēgas vērtību 5 un atgriež formātu, kas atbilst šai vērtībai (BinaryFormat.Byte). Vērtība 55 tiek nolasīta un atmesta.
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
Nākamajā piemērā ir parādīta vienuma vērtības transformācija un noklusējuma vienuma vērtība. Atkārtotais vienums ar atslēgu 1 summē ar List.Sum nolasīto vērtību summu. Neobligātajam vienumam ar atslēgu 2 noklusējuma vērtība ir 123, nevis Null.
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
