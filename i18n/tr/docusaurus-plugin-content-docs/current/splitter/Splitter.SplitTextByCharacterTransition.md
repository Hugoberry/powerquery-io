---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


Bir karakter türünden diğerine geçişe göre metni metin listesine ayıran bir işlev döndürür. \{0} ve \{1} parametreleri bir karakter listesi olabilir veya bir karakteri alıp true/false döndüren bir işlev olabilir.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Remarks

Bir karakter türünden diğerine geçişe göre metni metin listesine ayıran bir işlev döndürür. <code>before</code> ve <code>after</code> parametreleri bir karakter listesi olabilir veya bir karakteri alıp true/false döndüren bir işlev olabilir.


## Examples

### Example #1 
Bir büyük veya küçük harften sonra bir rakam geldiğinde girişi bölün.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
