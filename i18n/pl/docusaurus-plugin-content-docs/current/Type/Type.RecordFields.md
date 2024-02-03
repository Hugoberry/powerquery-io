---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Zwraca rekord opisujący pola typu rekordu z każdym polem zwróconego typu rekordu razem z odpowiednią nazwą i wartością.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Zwraca rekord opisujący pola rekordu <code>type</code>. Każde pole zwróconego typu rekordu ma odpowiednią nazwę i wartość w postaci rekordu <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Znajdź nazwę i wartość rekordu &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
