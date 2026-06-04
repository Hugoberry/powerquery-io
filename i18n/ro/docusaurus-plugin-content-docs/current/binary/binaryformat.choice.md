---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Returnează un format binar care alege următorul format binar în funcţie de o valoare care a fost citită deja.


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

Returnează un format binar care alege următorul format binar în funcţie de o valoare care a fost citită deja. Valoarea binară a formatului produsă de această funcţie funcţionează în etape:

-   Formatul binar specificat de parametrul `binaryFormat` este utilizat pentru a citi o valoare.
-   Valoarea este transmisă la funcţia de alegere specificată de parametrul `chooseFunction`.
-   Funcţia de alegere inspectează valoarea şi returnează un format binar secundar.
-   Formatul binar secundar este utilizat pentru a citi o valoare secundară.
-   Dacă se specifică funcţia de combinare, atunci valorile principale şi secundare sunt transmise la funcţia de combinare şi se returnează valoarea rezultată.
-   Dacă nu se specifică funcţia de combinare, se returnează valoarea secundară.
-   Se returnează valoarea secundară.

Parametrul `type` opţional indică tipul de format binar care va fi returnat de funcţia de alegere. Se poate specifica fie `type any`, `type list`, fie `type binary`. Dacă nu se specifică parametrul `type`, atunci se utilizează `type any`. Dacă se utilizează `type list` sau `type binary`, atunci sistemul poate returna o valoare `binary` sau `list` de redare în flux în locul uneia din zona tampon, lucru ce poate reduce volumul de memorie necesar pentru a citi formatul.


## Examples

### Example #1
Citiţi o listă de octeţi în care numărul de elemente este determinat de primul octet.
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
Citiţi o listă de octeţi în care numărul de elemente este determinat de primul octet şi păstraţi primul octet citit.
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
Citiţi o listă de octeţi în care numărul de elemente este determinat de primul octet utilizând o listă de redare în flux.
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
