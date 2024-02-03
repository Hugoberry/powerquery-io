---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

傳回會根據一種字元至另一種字元的轉換，來將文字分割至文字清單的函式。\{0} 及 \{1} 參數可以是字元的清單，或是會接收字元並傳回 true/false 的函式。


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

傳回會根據一種字元至另一種字元的轉換，來將文字分割至文字清單的函式。<code>before</code> 及 <code>after</code> 參數可以是字元的清單，或是會接收字元並傳回 true/false 的函式。


## Examples

### Example #1 
每當大寫或小寫字母後面跟數位時，分割輸入。
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
