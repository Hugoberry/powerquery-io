---
title: BinaryFormat.Record
---

# BinaryFormat.Record


Bir kaydı okuyan ikili biçimi döndürür.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Remarks

Bir kaydı okuyan ikili biçimi döndürür.  <code>record</code> parametresi, kaydın ikili biçimini belirtir.  Kayıttaki her alan farklı bir ikili biçimine sahip olabilir.  Bir alan ikili biçimi değeri olmayan bir değer içeriyorsa, bu alan için veri okunmaz ve alan değeri sonuca yansıtılır.


## Examples

### Example #1 
Bir 16 bit tamsayı ve bir 32 bit tamsayı içeren bir kaydı okur.
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
