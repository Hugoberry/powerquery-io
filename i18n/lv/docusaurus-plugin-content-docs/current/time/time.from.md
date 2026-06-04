---
title: Time.From
---

# Time.From


Tiek izveidots laiks no sniegtās vērtības.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Atgriež tipa `time` vērtību, kas ir iegūta no norādītās vērtības `value`. Var norādīt arī neobligātu parametru `culture` (piemēram, "lv-LV"). Ja norādītā vērtība `value` ir `Null`, funkcija `Time.From` atgriež vērtību `Null`. Ja norādītās vērtības `value` tips ir `time`, tiek atgriezta vērtība `value`. Par tipa `time` vērtību var pārvērst tālāk norādīto tipu vērtības.

-   `text`: `time` vērtība no teksta atveidojuma. Papildinformāciju skatiet sadaļā `Time.FromText`.
-   `datetime`: `value` laika komponents.
-   `datetimezone`: `value` vietējā datetime ekvivalenta laika komponents.
-   `number`: `time` ekvivalents dienu daļu skaitam, kas izteikts ar `value`. Ja `value` ir negatīvs vai lielāks par vai vienāds ar 1, tiek atgriezta kļūda.

`value`Ja vērtībai ir jebkāds cits tips, tiek atgriezta kļūda.


## Examples

### Example #1
Pārvērtiet vērtību `0.7575` par tipa `time` vērtību.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Pārvērtiet vērtību `#datetime(1899, 12, 30, 06, 45, 12)` par tipa `time` vērtību.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
