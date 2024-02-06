---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


Gibt eine Funktion zurück, die eine Liste von Text mithilfe einer Sequenz von Trennzeichen kombiniert.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Gibt eine Funktion zurück, die eine Liste von Textwerten mithilfe einer Sequenz von Trennzeichen zu einem einzelnen Textwert kombiniert.


## Examples

### Example #1 
Kombinieren Sie eine Liste von Textwerten mithilfe einer Sequenz von Trennzeichen.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
