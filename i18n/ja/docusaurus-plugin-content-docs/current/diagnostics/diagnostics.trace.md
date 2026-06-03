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

トレースが有効な場合、トレース `message` を書き込み、`value` を返します。オプション パラメーター `delayed` は、メッセージがトレースされるまで `value` の評価を延期するかどうかを指定します。`traceLevel` は、次のいずれかの値を受け取ることができます:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


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
