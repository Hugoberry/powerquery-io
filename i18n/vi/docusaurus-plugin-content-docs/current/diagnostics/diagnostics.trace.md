---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Ghi mục nhập dấu vết và trả về giá trị nếu tính năng theo dõi được bật.


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

Ghi một dấu vết `message` (nếu tính năng theo dõi bật) và trả về `value`. Tham số tùy chọn `delayed` chỉ định có trì hoãn việc đánh giá `value` đến khi thông báo được theo dõi hay không. `traceLevel` có thể lấy một trong các giá trị sau:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Theo dõi thông báo trước khi gọi hàm Text.From và trả về kết quả.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
