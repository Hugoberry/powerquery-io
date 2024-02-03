---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

Pateikiamas dvejetainis formatas, kuris pasirenka tolesnį dvejetainį formatą, pagrįstą jau perskaityta reikšme.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Details

Pateikiamas dvejetainis formatas, kuris pasirenka tolesnį dvejetainį formatą, pagrįstą jau perskaityta reikšme.  Dvejetainio formato reikšmė, kurią pateikia ši funkcija, veikia etapais:<ul><li>Dvejetainis formatas, kurį nurodo <code>binaryFormat</code> parametras, naudojamas reikšmei perskaityti.</li><li>Reikšmė perduodama išrinkimo funkcijai, kurią nurodo <code>chooseFunction</code> parametras.</li><li>Išrinkimo funkcija patikrina reikšmę ir pateikia antrąjį dvejetainį formatą.</li><li>Antrasis dvejetainis formatas naudojamas antrajai reikšmei perskaityti.</li><li>Jei nurodyta jungimo funkcija, tada pirmoji ir antroji reikšmės perduodamos jungimo funkcijai bei pateikiama gauta reikšmė.</li><li>Jeigu jungimo funkcija nenurodyta, pateikiama antroji reikšmė.</li><li>Pateikiama antroji reikšmė.</li></ul>Pasirinktinis <code>type</code> parametras rodo dvejetainio formato tipą, kurį pateiks išrinkimo funkcija.  Galima nurodyti <code>type any</code>, <code>type list</code> arba <code>type binary</code>.  Jei <code>type</code> parametras nenurodytas, tada naudojama <code>type any</code>.   Jei naudojama <code>type list</code> arba <code>type binary</code>, tada sistema gali pateikti srautinę <code>binary</code> arba <code>list</code> reikšmę, o ne buferizuotą, kuri gali sumažinti formatui perskaityti reikalingos atminties kiekį.


## Examples

### Example #1 
Perskaityti baitų sąrašą, kur elementų skaičius nustatomas pagal pirmąjį baitą.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2 
Perskaityti baitų sąrašą, kur elementų skaičius nustatomas pagal pirmąjį baitą, ir išsaugoti pirmą perskaitytą baitą.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3 
Perskaityti baitų sąrašą, kur elementų skaičius nustatomas pagal pirmąjį baitą naudojant srautinį sąrašą.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
