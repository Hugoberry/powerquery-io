---
title: Diagnostics.Trace
---

# Diagnostics.Trace


写入跟踪条目(如果已启用跟踪的话)并返回值。


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

写入跟踪 `message` (如果已启用跟踪)并返回 `value`。可选参数 `delayed` 指定了是否延迟计算 `value` 直到跟踪到消息。`traceLevel` 可取以下任一值:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
在调用 Text.From 函数前跟踪消息，并返回结果。
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
