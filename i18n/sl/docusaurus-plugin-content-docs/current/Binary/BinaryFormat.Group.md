---
title: BinaryFormat.Group
---

# BinaryFormat.Group


## Description

Vrne dvojiško obliko, ki bere skupino elementov.


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

Parametri so:<ul><li>Parameter <code>binaryFormat</code> določa dvojiško obliko vrednosti ključa.</li><li>Parameter <code>group</code> zagotavlja informacije o skupini znanih elementov.</li><li>Izbirni parameter <code>extra</code> lahko uporabite za določitev funkcije, ki bo vrnila vrednost dvojiške oblike za nepričakovano vrednost, ki sledi kateremu koli ključu.  Če parametra <code>extra</code> ne določite, bo v primeru nepričakovanih vrednosti ključa prišlo do napake.</li></ul>Parameter <code>group</code> določa seznam definicij elementov. Vsaka definicija elementa je seznam, ki vsebuje spodnjih 3 do 5 vrednosti:<ul><li>Vrednost ključa. Vrednost ključa, ki ustreza elementu. Vrednost mora biti enolična v naboru elementov.</li><li>Oblika elementa. Dvojiška oblika, ki ustreza vrednosti elementa in omogoča, da ima vsak element drugačno obliko. </li><li>Ponovitev elementa. Vrednost <code>BinaryOccurrence.Type</code>, ki določa, kolikokrat naj bi se element ponovil v skupini. Zahtevani elementi, ki niso prisotni, povzročijo napako. Zahtevani ali izbirni podvojeni elementi so obravnavani kot nepričakovane vrednosti ključa.</li><li>Privzeta vrednost elementa (izbirno). Če je privzeta vrednost elementa prikazana na seznamu definicij elementov in ni ničelna, bo uporabljena namesto privzete vrednosti. Privzeta vrednost za ponavljajoče se ali izbirne elemente je ničelna vrednost, privzeta vrednost za ponavljajoče se vrednosti pa je prazen seznam \{ }.</li><li>Pretvorba vrednosti elementa (izbirno). Če je funkcija pretvorbe vrednosti elementa na seznamu definicij elementov in ni ničelna, bo klicana za pretvorbo vrednosti elementa, preden je ta vrnjena. Funkcija pretvorbe je poklicana le, če je element prikazan v vnosu (nikoli ne bo poklicana s privzeto vrednostjo). </li></ul>


## Examples

### Example #1 
Naslednje predvideva vrednost ključa, ki je enobajtna, s štirimi pričakovanimi elementi v skupini, pri katerih ključu sledi bajt podatkov.  Element se pri vnosu prikaže tako:&lt;ul&gt;&lt;li&gt;Ključ 1 je zahtevan in se pojavi z vrednostjo 11.&lt;/li&gt;&lt;li&gt;Ključ 2 se ponovi in se pojavi dvakrat z vrednostjo 22 ter da rezultat v vrednosti \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;Ključ 3 je izbiren in se ne pojavi ter da rezultat v vrednosti &#34;null&#34;.&lt;/li&gt;&lt;li&gt;Ključ 4 se ponovi, vendar se ne pojavi, in da rezultat v vrednosti \{ }.&lt;/li&gt;&lt;li&gt;Ključ 5 ni del skupine, vendar se pojavi enkrat z vrednostjo 55.  Dodatna funkcija je klicana z vrednostjo ključa 5 in vrne obliko, ki ustreza tej vrednosti (BinaryFormat.Byte).  Vrednost 55 je prebrana in zavržena.&lt;/li&gt;&lt;/ul&gt;
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
Naslednji primer prikazuje pretvorbo vrednosti elementa in privzeto vrednost elementa.   Ponavljanje elementa s ključem 1 povzame seznam vrednosti, prebranih z &#34;List.Sum&#34;.  Izbirni element s ključem 2 ima privzeto vrednost 123 namesto null.
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
