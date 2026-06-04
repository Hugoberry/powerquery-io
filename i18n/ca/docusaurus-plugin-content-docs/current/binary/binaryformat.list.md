---
title: BinaryFormat.List
---

# BinaryFormat.List


Retorna un format binari que llegeix una seqüència d'elements i retorna una llista.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Retorna un format binari que llegeix una seqüència d'elements i genera un element `list`. El paràmetre `binaryFormat` especifica el format binari de cada element. Hi ha tres maneres de determinar el nombre d'elements llegits:

-   Si no s'especifica `countOrCondition`, el format binari es llegirà fins que no hi hagi més elements.
-   Si `countOrCondition` és un nombre, el format binari es llegirà el mateix nombre d'elements.
-   Si `countOrCondition` és una funció, aquesta funció s'invocarà per a cada element llegit. La funció retorna el valor true per continuar i false per deixar de llegir elements. L'element final està inclòs a la llista.
-   Si `countOrCondition` és un format binari, s'espera que el recompte d'elements precedeixi la llista i s'utilitza el format especificat per llegir el recompte.


## Examples

### Example #1
Llegeix bytes fins al final de les dades.
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
Llegeix dos bytes.
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
Llegeix bytes fins que el valor del byte sigui més gran o igual que dos.
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
