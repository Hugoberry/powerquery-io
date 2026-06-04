---
title: Error.Record
---

# Error.Record


Mengembalikan rekod ralat daripada nilai teks yang ditentukan untuk sebab, mesej, butiran dan kod ralat.


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

Mengembalikan rekod ralat daripada nilai teks yang ditentukan untuk sebab, mesej, butiran dan kod ralat.

-   `reason`: Punca utama ralat.
-   `message`: (Pilihan) Penerangan tentang ralat.
-   `detail`: (Pilihan) Maklumat terperinci tambahan tentang ralat.
-   `parameters`: (Pilihan) Senarai nilai yang memberikan konteks tambahan untuk ralat, biasanya digunakan untuk diagnostik atau pengendalian secara programatik.
-   `errorCode`: (Pilihan) Pengecam untuk ralat.


## Examples

### Example #1
Menangani ralat bahagi dengan sifar.
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
Mengendalikan entri dengan ralat ID pelanggan yang tidak wujud. Jika tiada ralat berlaku, tunjukkan entri yang berjaya.
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
