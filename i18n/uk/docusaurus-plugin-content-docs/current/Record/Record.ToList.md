---
title: Record.ToList
---

# Record.ToList


## Description

Повертає список значень, що містить значення полів із вхідного запису.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Повертає список значень, що містить значення полів із вхідного <code>record</code>.


## Examples

### Example #1 
Видобути значення полів із запису.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
