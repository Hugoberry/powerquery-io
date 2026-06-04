---
title: Error.Record
---

# Error.Record


Mengembalikan catatan kesalahan dari nilai teks yang diberikan untuk alasan, pesan, detail, dan kode kesalahan.


## Syntax

```powerquery
Error.Record(
    reason as text,
    optional message as text,
    optional detail as any,
    optional parameters as list,
    optional errorCode as text
) as record
```


## Remarks

Mengembalikan catatan kesalahan dari nilai teks yang diberikan untuk alasan, pesan, detail, dan kode kesalahan.

-   `reason`: Penyebab kesalahan tingkat tinggi.
-   `message`: (Opsional) Deskripsi kesalahan.
-   `detail`: (Opsional) Informasi mendetail tambahan tentang kesalahan.
-   `parameters`: (Opsional) Daftar nilai yang menyediakan konteks tambahan untuk kesalahan, biasanya digunakan untuk diagnostik atau penanganan terprogram.
-   `errorCode`: (Opsional) Pengidentifikasi kesalahan.


## Examples

### Example #1
Menangani kesalahan dibagi dengan nol.
```powerquery
let
    input = 100,
    divisor = 0,
    result = try if divisor = 0 then
        error Error.Record(
            "DivideByZero",
            "You attempted to divide by zero."
        )
    else
        input / divisor
in
    result
```

Result: 
```powerquery
[
    HasError = true,
    Error =
    [
        Reason = "DivideByZero",
        Message = "You attempted to divide by zero.",
        Detail = null,
        Message.Format = null,
        Message.Parameters = null,
        ErrorCode = null
    ]
]
```


### Example #2
Menangani entri dengan kesalahan ID pelanggan yang tidak ada. Jika tidak terjadi kesalahan, tunjukkan entri yang berhasil.
```powerquery
let
    CustomerId = 12345,
    result = try if CustomerId > 9999 then
        error Error.Record(
            "CustomerNotFound",
            Text.Format("Customer ID #{0} wasn't found.", {CustomerId}),
            "Customer doesn't exist.",
            {
                Text.Format("Invalid ID = #{0}", {CustomerId}),
                "Valid IDs: https://api.contoso.com/customers"
            },
            "ERR404"
        )
    else CustomerId
in
    result
```

Result: 
```powerquery
[
    HasError = true,
    Error = [
        Reason = "CustomerNotFound",
        Message = "Customer ID 12345 wasn't found.",
        Detail = "Customer doesn't exist.",
        Message.Format = "Customer ID 12345 wasn't found.",
        Message.Parameters = {
            "Invalid ID = 12345",
            "Valid IDs: https://api.contoso.com/customers"
        },
        ErrorCode = "ERR404"
    ]
]
```




## Category
Error
