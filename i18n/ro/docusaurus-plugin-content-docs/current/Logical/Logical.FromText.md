---
title: Logical.FromText
---

# Logical.FromText


## Description

Creează o valoare logică din valorile text „true” şi „false”.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Creează o valoare logică din valoarea text <code>text</code>, fie „true”, fie „false”. Dacă <code>text</code> conţine un şir diferit, apare o excepţie. Valoarea text <code>text</code> nu este sensibilă la litere mari şi mici.


## Examples

### Example #1 
Creaţi o valoare logică din şirul text „true”.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Creaţi o valoare logică din şirul text „a”.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
