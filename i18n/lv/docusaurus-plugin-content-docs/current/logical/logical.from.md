---
title: Logical.From
---

# Logical.From


No norādītās vērtības tiek izveidota loģiskā vērtība.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Atgriež tipa `logical` vērtību, kas ir iegūta no norādītās vērtības `value`. Ja norādītā vērtība `value` ir `Null`, funkcija `Logical.From` atgriež vērtību `Null`. Ja norādītā vērtība `value` ir `logical`, tiek atgriezta vērtība `value`. Par tipa `logical` vērtību var pārvērst tālāk norādīto tipu vērtības.

-   `text`: no teksta vērtības, kas var būt `True` vai `False`, tiek iegūta tipa `logical` vērtība. Papildinformāciju skatiet sadaļā `Logical.FromText`.
-   `number`: ja vērtība `value` ir vienāda ar `0`, tiek atgriezta vērtība `False`, pretējā gadījumā tiek atgriezta vērtība `True`.

Ja vērtībai `value` ir jebkāds cits tips, tiek atgriezta kļūda.


## Examples

### Example #1
Pārvērtiet vērtību `2` par tipa `logical` vērtību.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
