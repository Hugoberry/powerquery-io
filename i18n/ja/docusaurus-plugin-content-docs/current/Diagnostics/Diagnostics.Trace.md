---
title: Diagnostics.Trace
---

# Diagnostics.Trace


トレースが有効になっていて値を返す場合は、トレース エントリを記述します。


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

トレースが有効になっていて <code>value</code> を返す場合は、トレース <code>message</code> を記述します。オプション パラメーター <code>delayed</code> は、メッセージがトレースされるまで <code>value</code> の評価を遅らせるかどうかを指定します。<code>traceLevel</code> には次のいずれかの値を指定できます:    <code>TraceLevel.Critical</code>、    <code>TraceLevel.Error</code>、    <code>TraceLevel.Warning</code>、    <code>TraceLevel.Information</code>、    <code>TraceLevel.Verbose</code>。  


## Examples

### Example #1 
Text.From 関数を呼び出す前にメッセージをトレースし、結果を返します。
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
