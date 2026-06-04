---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


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


## Remarks

Pateikiamas dvejetainis formatas, kuris pasirenka tolesnį dvejetainį formatą, pagrįstą jau perskaityta reikšme. Dvejetainio formato reikšmė, kurią pateikia ši funkcija, veikia etapais:

-   Dvejetainis formatas, kurį nurodo `binaryFormat` parametras, naudojamas reikšmei perskaityti.
-   Reikšmė perduodama išrinkimo funkcijai, kurią nurodo `chooseFunction` parametras.
-   Išrinkimo funkcija patikrina reikšmę ir pateikia antrąjį dvejetainį formatą.
-   Antrasis dvejetainis formatas naudojamas antrajai reikšmei perskaityti.
-   Jei nurodyta jungimo funkcija, tada pirmoji ir antroji reikšmės perduodamos jungimo funkcijai bei pateikiama gauta reikšmė.
-   Jeigu jungimo funkcija nenurodyta, pateikiama antroji reikšmė.
-   Pateikiama antroji reikšmė.

Pasirinktinis `type` parametras rodo dvejetainio formato tipą, kurį pateiks išrinkimo funkcija. Galima nurodyti `type any`, `type list` arba `type binary`. Jei `type` parametras nenurodytas, tada naudojama `type any`. Jei naudojama `type list` arba `type binary`, tada sistema gali pateikti srautinę `binary` arba `list` reikšmę, o ne buferizuotą, kuri gali sumažinti formatui perskaityti reikalingos atminties kiekį.


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
