---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Korvaa tekstin annetun syötteen sisällä.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Korvaa tekstin `old` alkuperäisessä kohteessa `text` tekstillä `new`. Tätä korvaustoimintoa voi käyttää kohteissa `List.ReplaceValue` ja `Table.ReplaceValue`.


## Examples

### Example #1
Korvaa teksti "hE" tekstillä "He" merkkijonossa "hEllo world".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
