---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Devolve um formato binário que lê um registo.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Devolve um formato binário que lê um registo.  O parâmetro <code>record</code> especifica o formato do registo.  Cada campo no registo pode ter um formato binário diferente.  Se um campo contiver um valor que não seja um valor de formato binário, não serão lidos quaisquer dados relativos a esse campo e o valor do campo refletir-se-á no resultado.


## Examples

### Example #1 
Ler um registo que contém um número inteiro de 16 bits e um número inteiro de 32 bits.
```powerquery
let
    binaryData = #binary({
        0x00, 0x01,
        0x00, 0x00, 0x00, 0x02
    }),
    recordFormat = BinaryFormat.Record([
        A = BinaryFormat.UnsignedInteger16,
        B = BinaryFormat.UnsignedInteger32
    ])
in
    recordFormat(binaryData)
```

Result: 
```powerquery
[A = 1, B = 2]
```




## Category
Binary Formats.Reading records
