---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Pakeičiamas tekstas pateiktoje įvestyje.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Pakeičiamas `old` tekstas pradiniame `text` į `new` tekstą. Šią pakeitimo funkciją galima naudoti `List.ReplaceValue` ir `Table.ReplaceValue`.


## Examples

### Example #1
Pakeiskite tekstą „hE“ tekstu „He“ eilutėje „hEllo world“.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
