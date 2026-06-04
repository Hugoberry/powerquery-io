---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Көрсетілген енгізбедегі мәндерді ауыстырады.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Бастапқы `value` ішіндегі `old` мәнін `new` мәнімен ауыстырады. Бұл алмастыру құралын `List.ReplaceValue` және `Table.ReplaceValue` ішінде пайдалануға болады.


## Examples

### Example #1
11 мәнін 10 мәнімен ауыстыру.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
