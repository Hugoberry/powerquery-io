---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

Menulis kemasukan jejak, jika penjejakan didayakan dan mengembalikan nilai.


## Syntax

```powerquery
Diagnostics.Trace(
    traceLevel as number,
    message as any,
    value as any,
    optional delayed as logical
) as any
```


## Details

Menulis jejak <code>message</code>, jika penjejakan didayakan dan mengembalikan <code>value</code>. Parameter pilihan <code>delayed</code> menentukan sama ada hendak melewatkan penilaian <code>value</code> sehingga mesej dijejak. <code>traceLevel</code> boleh mengambil satu daripada nilai berikut:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Jejak mesej sebelum menggunakan fungsi Text.From dan mengembalikan keputusan.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
