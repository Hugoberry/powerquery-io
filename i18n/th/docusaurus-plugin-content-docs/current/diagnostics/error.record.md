---
title: Error.Record
---

# Error.Record


ส่งกลับระเบียนข้อผิดพลาดจากค่าข้อความที่ให้มาเพื่อเหตุผล ข้อความ รายละเอียด และรหัสข้อผิดพลาด


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

ส่งกลับระเบียนข้อผิดพลาดจากค่าข้อความที่ให้มาเพื่อเหตุผล ข้อความ รายละเอียด และรหัสข้อผิดพลาด

-   `reason`: สาเหตุระดับสูงของข้อผิดพลาด
-   `message`: (เพิ่มเติม) คำอธิบายข้อผิดพลาด
-   `detail`: (เพิ่มเติม) ข้อมูลรายละเอียดเพิ่มเติมเกี่ยวกับข้อผิดพลาด
-   `parameters`: (เพิ่มเติม) รายการของค่าที่ให้บริบทเพิ่มเติมสำหรับข้อผิดพลาด โดยทั่วไปจะใช้สำหรับการวินิจฉัยหรือการจัดการทางโปรแกรม
-   `errorCode`: (เพิ่มเติม) ตัวระบุสำหรับข้อผิดพลาด


## Examples

### Example #1
จัดการข้อผิดพลาดการหารด้วยศูนย์
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
จัดการรายการที่มีข้อผิดพลาด ID ลูกค้าที่ไม่มีอยู่ ถ้าไม่มีข้อผิดพลาดเกิดขึ้น ให้ระบุรายการที่สำเร็จ
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
