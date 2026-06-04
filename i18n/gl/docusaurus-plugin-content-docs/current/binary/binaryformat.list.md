---
title: BinaryFormat.List
---

# BinaryFormat.List


Devolve un formato binario que le unha secuencia de elementos e devolve unha lista.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Devolve un formato binario que le unha secuencia de elementos e devolve unha `list`. O parámetro `binaryFormat` especifica o formato binario de cada elemento. Hai tres formas de determinar o número de elementos lidos:

-   Se non se especifica `countOrCondition` o formato binario vai ler ata que non haxa máis elementos.
-   Se `countOrCondition` é un número, o formato binario vai ler eses elementos.
-   Se `countOrCondition` é unha función, vaise chamar esa función para cada elemento lido. A función devolve verdadeiro para continuar e falso para deixar de ler elementos. O elemento final está incluído na lista.
-   Se `countOrCondition` está nun formato binario, a conta de elementos espérase que preceda á lista e úsase o formato especificado para ler a conta.


## Examples

### Example #1
Ler bytes ata o final dos datos.
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
Ler dous bytes.
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
Ler bytes ata que o valor do byte sexa maior ou igual que dous.
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
