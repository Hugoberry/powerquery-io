---
title: List.Last
---

# List.Last


Tiek atgriezta saraksta pēdējā vērtība vai norādītā noklusējuma vērtība, ja saraksts ir tukšs.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Tiek atgriezts saraksta pēdējais vienums vai neobligātā noklusējuma vērtība, ja norādītais saraksts ir tukšs.

-   `list`: saraksts, kas jāizpēta.
-   `defaultValue`: (neobligāti) noklusējuma vērtība, kas jāatgriež, ja saraksts ir tukšs. Ja saraksts ir tukšs un noklusējuma vērtība nav norādīta, funkcija atgriež `null`.


## Examples

### Example #1
Iegūstiet saraksta \{1, 2, 3\} pēdējo vērtību.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Iegūstiet saraksta \{\} pēdējo vērtību. Ja saraksts ir tukšs, tiek atgriezta vērtība -1.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
