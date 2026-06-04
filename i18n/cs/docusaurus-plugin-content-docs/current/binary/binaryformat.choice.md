---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Vrátí binární formát, který vybírá další binární formát na základě již čtené hodnoty.


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

Vrátí binární formát, který vybírá další binární formát na základě již čtené hodnoty. Hodnota v binárním formátu vytvořená touto funkcí pracuje v několika fázích:

-   Binární formát určený parametrem `binaryFormat` se používá při čtení hodnoty.
-   Hodnota je předána funkci výběru, kterou určil parametr `chooseFunction` .
-   Funkce výběru zkontroluje hodnotu a vrátí druhý binární formát.
-   Druhý binární formát přečte druhou hodnotu.
-   Je-li zadána kombinační funkce, první i druhá hodnota je předána této funkci, což vrátí výslednou hodnotu.
-   Není-li zadána kombinační funkce, vrátí se jen druhá hodnota.
-   Vrátí se druhá hodnota.

Volitelný parametr `type` určuje typ binárního formátu, který je vrácen zvolenou funkcí. Lze zadat hodnotu `type any`, `type list`, nebo `type binary`. Není-li zadán parametr `type`, použije se hodnota `type any`. Pokud se použije hodnota `type list` nebo hodnota `type binary`, systém může případně vrátit hodnotu datového proudu `binary` nebo `list` místo hodnoty z vyrovnávací paměti, což sníží množství paměti nutné k přečtení formátu.


## Examples

### Example #1
Čte seznam bajtů, kde je počet elementů určen prvním bajtem.
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
Čte seznam bajtů, kde je počet elementů určen prvním bajtem, a zachová první čtený bajt.
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
S využitím datového proudu čte seznam bajtů, ve kterém je počet elementů určen prvním bajtem.
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
