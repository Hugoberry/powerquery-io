---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

Returnează un format binar care citeşte o secvenţă de elemente şi returnează  o listă.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

Returnează un format binar care citește o secvență de elemente și returnează <code>list</code>.  Parametrul <code>binaryFormat</code> specifică formatul binar al fiecărui element.  Există trei modalități de determinare a numărului de elemente citite: <ul><li>Dacă nu se specifică <code>countOrCondition</code>, atunci formatul binar va citi până când nu mai există elemente.</li><li>Dacă <code>countOrCondition</code> este un număr, atunci formatul binar va citi numărul respectiv de elemente.</li><li>Dacă <code>countOrCondition</code> este o funcție, atunci funcția respectivă va fi invocată pentru fiecare element citit.  Funcția returnează true pentru a continua și false pentru a opri citirea elementelor.  Elementul final este inclus în listă.</li><li>Dacă <code>countOrCondition</code> este un format binar, atunci numărul de elemente este așteptat să apară înaintea listei, iar formatul specificat este utilizat pentru a citi numărul.</li></ul>


## Examples

### Example #1 
Citiţi octeţii până la terminarea datelor.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Citiţi doi octeţi.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3 
Citiţi octeţii până când valoarea pentru octeţi este mai mare sau egală cu doi.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
