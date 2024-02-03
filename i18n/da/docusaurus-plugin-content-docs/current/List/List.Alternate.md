---
title: List.Alternate
---

# List.Alternate


## Description

Returnerer en liste, der består af alle forskydningselementer med ulige numre på en liste.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

Returnerer en liste, der består af alle forskydningselementer med ulige numre på en liste. Skifter mellem at hente og sende værdier fra listen <code>list</code>, afhængigt af parametrene.    <ul>    <li><code>count</code>: Angiver det antal værdier, der sendes hver gang.</li>    <li><code>repeatInterval</code>: Et valgfrit gentagelsesinterval, der angiver, hvor mange værdier der er lagt til mellem de sendte værdier.</li>    <li><code>offset</code>: En valgfri forskydningsparameter for at starte afsendelse af værdier ved den første forskydning.</li>    </ul>


## Examples

### Example #1 
Opret en liste fra \{1..10}, der sender det første tal.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Opret en liste fra \{1..10}, der springer hvert andet tal over.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Opret en liste fra \{1..10}, der starter ved 1 og sender hvert andet tal.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Opret en liste fra \{1..10}, der starter ved 1, springer over én værdi, beholder to værdier osv.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
