---
title: Character.ToNumber
---

# Character.ToNumber


將字元轉換成其數值。


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

傳回 <code>character</code> 的同等數字。<br />    <br />    結果會是由提供的字元或代理字組所代表的 21 位元 Unicode 字碼元素。  


## Examples

### Example #1 
將字元轉換成其同等數值。
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
將「露齒笑的臉」表情符號的 UTF-16 代理字組轉換成其同等的十六進位字碼元素。
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
