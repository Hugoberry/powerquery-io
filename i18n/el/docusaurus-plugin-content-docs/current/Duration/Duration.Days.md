---
title: Duration.Days
---

# Duration.Days


## Description

Επιστρέφει το τμήμα ημερών μιας διάρκειας.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Επιστρέφει το τμήμα ημερών του <code>duration</code>.


## Examples

### Example #1 
Εξαγάγετε τον αριθμό των ημερών μεταξύ δύο ημερομηνιών.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
