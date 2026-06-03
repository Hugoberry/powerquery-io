---
title: Error.Record
---

# Error.Record


कारण, संदेश, विवरण और त्रुटि कोड के लिए प्रदान किए गए टेक्स्ट मानों से त्रुटि रिकॉर्ड लौटाता है.


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

कारण, संदेश, विवरण और त्रुटि कोड के लिए प्रदान किए गए टेक्स्ट मानों से त्रुटि रिकॉर्ड लौटाता है.

-   `reason`: त्रुटि का उच्च-स्तरीय कारण.
-   `message`: (वैकल्पिक) त्रुटि का विवरण.
-   `detail`: (वैकल्पिक) त्रुटि के बारे में अतिरिक्त विस्तृत जानकारी.
-   `parameters`: (वैकल्पिक) मानों की एक सूची जो त्रुटि के लिए अतिरिक्त संदर्भ प्रदान करती है, आमतौर पर निदान या प्रोग्रामैटिक हैंडलिंग के लिए उपयोग किया जाता है.
-   `errorCode`: (वैकल्पिक) त्रुटि के लिए एक पहचानकर्ता.


## Examples

### Example #1
शून्य त्रुटि से विभाजन को हैंडल करें.
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
गैर-मौजूद ग्राहक ID त्रुटि वाली प्रविष्टि को हैंडल करें. अगर कोई त्रुटि नहीं होती है, तो सफल प्रविष्टि इंगित करें.
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
