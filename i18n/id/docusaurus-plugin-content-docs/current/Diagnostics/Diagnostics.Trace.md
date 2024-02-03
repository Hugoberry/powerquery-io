---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

Menulis entri pelacakan, jika pelacakan diaktifkan, dan menghasilkan nilai.


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

Menulis pelacakan <code>message</code>, jika pelacakan diaktifkan, dan menghasilkan <code>value</code>. Sebuah parameter opsional <code>delayed</code> menentukan apakah akan menunda evaluasi <code>value</code> hingga pesan dilacak. <code>traceLevel</code> dapat mengambil salah satu dari nilai berikut:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Melacak pesan sebelum memanggil fungsi Text.From dan mengembalikan hasil.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
