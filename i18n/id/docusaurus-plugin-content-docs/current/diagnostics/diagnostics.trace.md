---
title: Diagnostics.Trace
---

# Diagnostics.Trace


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


## Remarks

Menulis jejak `message`, jika pelacakan diaktifkan, dan mengembalikan `value`. Parameter opsional `delayed` menentukan apakah akan menunda evaluasi `value` hingga pesan dilacak. `traceLevel` dapat mengambil salah satu nilai berikut:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


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
