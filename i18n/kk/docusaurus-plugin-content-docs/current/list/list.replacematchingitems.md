---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


\{ old, new \} әр ауыстыруын қолданады.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

`list` тізімінде көрсетілген ауыстыруларды орындайды. `replacements` ауыстыру әрекеті тізімде көрсетілген екі мәндік (бұрынғы мән және жаңа мән) тізімнен тұрады. Теңдікті тексеруді бақылау үшін `equationCriteria` міндетті емес теңдеу шарттарының мәнін көрсетуге болады.


## Examples

### Example #1
5 мәнін -5 мәнімен және 1 мәнін -1 мәнімен ауыстырып, \{1, 2, 3, 4, 5\} мәндерінен тізім жасау.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
