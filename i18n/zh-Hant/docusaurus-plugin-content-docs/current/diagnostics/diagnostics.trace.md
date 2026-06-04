---
title: Diagnostics.Trace
---

# Diagnostics.Trace


若啟用追蹤，則寫入追蹤項目，並傳回值。


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

如果啟用追蹤，會寫入追蹤 `message`，並傳回 `value`。選擇性參數 `delayed` 指定是否要延遲評估 `value` 直到追蹤郵件。`traceLevel` 可接受下列其中一個值:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
在叫用 Text.From 函數前追蹤訊息並傳回結果。
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
