---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

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


## Details

Ghi <code>message</code> dấu vết và trả về <code>value</code> nếu tính năng theo dõi được bật. Một <code>delayed</code> tham số tùy chọn chỉ định xem có trì hoãn đánh giá <code>value</code> cho đến khi thông báo được theo dõi hay không. <code>traceLevel</code> có thể lấy một trong các giá trị sau:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


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
