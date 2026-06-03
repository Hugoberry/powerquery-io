---
title: Text.Proper
---

# Text.Proper


各単語の最初の文字を大文字にします。


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

テキスト値 `text` の各単語の最初の文字のみを大文字にした結果を返します。他のすべての文字は小文字で返されます。省略可能な `culture` を指定することもできます (例: "en-US")。


## Examples

### Example #1
単純な文では `Text.Proper` を使用します。
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
