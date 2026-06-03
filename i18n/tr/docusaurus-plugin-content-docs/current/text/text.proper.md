---
title: Text.Proper
---

# Text.Proper


Her sözcüğün ilk harfini büyük yapar.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

`text` metin değerindeki her sözcüğün yalnızca ilk harfini büyük yapmanın sonucunu döndürür. Tüm diğer harfler küçük harfe döndürülür. Ayrıca, isteğe bağlı bir `culture` sağlanabilir (ör. "tr-TR").


## Examples

### Example #1
Basit bir tümce üzerinde `Text.Proper` kullanır.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
