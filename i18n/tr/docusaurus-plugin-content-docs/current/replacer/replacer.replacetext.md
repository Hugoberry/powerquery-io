---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Sağlanan girdideki metni değiştirir.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Asıl `text` içindeki `old` metnini `new` metni ile değiştirir. Bu değiştirici işlevi `List.ReplaceValue` ve `Table.ReplaceValue` içinde kullanılabilir.


## Examples

### Example #1
"hEllo world" dizesindeki "hE" ifadesini "He" olarak değiştirir.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
