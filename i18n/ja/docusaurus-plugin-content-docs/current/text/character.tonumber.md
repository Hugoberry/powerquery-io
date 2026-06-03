---
title: Character.ToNumber
---

# Character.ToNumber


文字を数値に変換します。


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

`character` と等価の数値を返します。  
  
結果は、指定された文字またはサロゲート ペアで表される 21 ビットの Unicode コード ポイントになります。


## Examples

### Example #1
文字を等価の数値に変換します。
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2
"笑顔" 絵文字の UTF-16 サロゲート ペアを同等の 16 進数コード ポイントに変換します。
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
