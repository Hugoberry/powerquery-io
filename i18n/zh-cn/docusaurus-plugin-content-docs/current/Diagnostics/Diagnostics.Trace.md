---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

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


## Details

写入跟踪 <code>message</code> (如果已启用跟踪的话)并返回 <code>value</code>。可选参数 <code>delayed</code> 指定了是否延迟计算 <code>value</code> 直到跟踪到消息。<code>traceLevel</code> 可取以下任一值:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>、    <code>TraceLevel.Warning</code>、    <code>TraceLevel.Information</code>、    <code>TraceLevel.Verbose</code>。  


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
