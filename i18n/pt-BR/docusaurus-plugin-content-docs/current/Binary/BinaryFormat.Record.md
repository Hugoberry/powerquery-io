---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Retorna um formato binário que lê um registro.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Retorna um formato binário que lê um registro.  O parâmetro <code>record</code> especifica o formato do registro.  Cada campo do registro pode ter um formato binário diferente.  Se um campo contiver um valor que não seja um valor de formato binário, nenhum dado será lido para esse campo, e o valor do campo será refletido no resultado.


## Examples

### Example #1 
Leia um registro contendo um número inteiro de 16 bits e um número inteiro de 32 bits.
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
