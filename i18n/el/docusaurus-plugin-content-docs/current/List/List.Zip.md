---
title: List.Zip
---

# List.Zip


## Description

Επιστρέφει μια λίστα με λίστες, συνδυάζοντας στοιχεία στην ίδια θέση σε πολλές λίστες.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Παίρνει μια λίστα με λίστες <code>lists</code> και επιστρέφει μια λίστα με λίστες η οποία συνδυάζει στοιχεία στην ίδια θέση.


## Examples

### Example #1 
Συμπιέζει τις δύο απλές λίστες \{1, 2} και \{3, 4}.
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2 
Συμπιέζει τις δύο απλές λίστες διαφορετικών μεγεθών \{1, 2} και \{3}.
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions
