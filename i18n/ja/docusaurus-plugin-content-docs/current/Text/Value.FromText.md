---
title: Value.FromText
---

# Value.FromText


## Description

テキスト形式の表記から厳密に型指定された値を作成します。


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

テキスト形式の表記 (<code>text</code>) から値をデコードし、適切な型の値として解釈します。    <code>Value.FromText</code> はテキスト値を受け取り、数、論理値、NULL 値、datetime 値、期間値、またはテキスト値を返します。空のテキスト値は NULL 値として解釈されます。    省略可能な <code>culture</code> を指定することもできます (例: "en-US")。



## Category
Text.Conversions from and to text
