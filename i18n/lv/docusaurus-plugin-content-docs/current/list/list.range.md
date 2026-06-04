---
title: List.Range
---

# List.Range


Tiek atgriezta saraksta apakškopa, kas sākas atbilstoši norādītajai nobīdei.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

Atgriež `list` apakškopu, kas sākas ar `offset`. Neobligāts parametrs `count` iestata maksimālo apakškopas vienumu skaitu.


## Examples

### Example #1
Iegūstiet skaitļu saraksta no 1 līdz 10 apakškopu, kas sākas atbilstoši nobīdei 6.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2
Iegūstiet skaitļu saraksta no 1 līdz 10 apakškopu, kas sākas atbilstoši nobīdei 6 un kurā ir 2 vienumi.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
