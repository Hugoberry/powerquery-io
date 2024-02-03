---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

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


## Details

若啟用追蹤，則寫入追蹤 <code>message</code>，並傳回 <code>value</code>。選擇性參數 <code>delayed</code> 指定是否延遲評估 <code>value</code> 直到訊息追蹤完成。<code>traceLevel</code> 可接受下列其中一個值:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>、    <code>TraceLevel.Warning</code>、    <code>TraceLevel.Information</code>、    <code>TraceLevel.Verbose</code>。  


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
