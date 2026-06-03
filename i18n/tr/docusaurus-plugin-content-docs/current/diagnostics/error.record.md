---
title: Error.Record
---

# Error.Record


Neden, ileti, ayrıntı ve hata kodu için belirtilen metin değerlerinden bir hata kaydı döndürür.


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

Neden, ileti, ayrıntı ve hata kodu için belirtilen metin değerlerinden bir hata kaydı döndürür.

-   `reason`: Hatanın üst düzey nedeni.
-   `message`: (İsteğe bağlı) Hatanın açıklaması.
-   `detail`: (İsteğe bağlı) Hata hakkında ek ayrıntılı bilgiler.
-   `parameters`: (İsteğe bağlı) Hata için ek bağlam sağlayan değerlerin listesi, genellikle tanılama veya programlı işleme için kullanılır.
-   `errorCode`: (İsteğe bağlı) Hatanın tanımlayıcısı.


## Examples

### Example #1
Sıfıra bölme hatasını işle.
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
Var olmayan müşteri kimliği hatası ile bir girişi işleyin. Hata oluşmazsa, başarılı bir giriş olduğunu belirtin.
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
