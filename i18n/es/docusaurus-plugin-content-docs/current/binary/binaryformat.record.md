---
title: BinaryFormat.Record
---

# BinaryFormat.Record


Devuelve un formato binario que lee un registro.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Remarks

Devuelve un formato binario que lee un registro.  El parámetro <code>record</code> especifica el formato del registro.  Cada campo del registro puede tener otro formato binario.  Si un campo contiene un valor que no es un valor de formato binario, no se lee ningún dato para ese campo y el valor de campo se muestra en el resultado.


## Examples

### Example #1 
Leer un registro que contenga un entero de 16 bits y un entero de 32 bits.
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
