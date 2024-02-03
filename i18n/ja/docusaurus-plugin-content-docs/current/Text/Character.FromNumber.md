---
title: Character.FromNumber
---

# Character.FromNumber


## Description

数値をテキスト文字に変換します。


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

数値に対応する文字を返します。<br />    <br />    指定された <code>number</code> は 21 ビットの Unicode コード ポイントである必要があります。


## Examples

### Example #1 
数値を等価の文字に変換します。
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
文字を数値に変換して、もう一度戻します。
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
&#34;笑顔&#34; 絵文字の 16 進数コード ポイントを、同等の UTF-16 サロゲート ペアに変換します。
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
