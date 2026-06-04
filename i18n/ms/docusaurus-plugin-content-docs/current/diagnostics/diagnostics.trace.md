---
title: Diagnostics.Trace
---

# Diagnostics.Trace


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


## Remarks

Menulis jejak `message`, jika penjejakan didayakan dan mengembalikan `value`. Parameter pilihan `delayed` menentukan sama ada hendak menunda penilaian `value` sehingga mesej dikesan. `traceLevel` boleh mengambil salah satu daripada nilai berikut:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Amaran`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


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
